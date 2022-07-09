if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');
const passport = require('passport');
const localStratergy = require('passport-local');
const mongoSanitize = require('express-mongo-sanitize');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');
var cors = require('cors')
const jwt = require('jsonwebtoken');

const ExpressError = require('./utils/ExpressError');
const User = require('./models/user');
const userRoutes = require('./routes/users'); 
const materialRoutes = require('./routes/material'); 
const eventRoutes = require('./routes/event'); 

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});

const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.once("open",()=>{
    console.log("Database Connected");
});

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')))

app.use(cors())

app.use(mongoSanitize({
    replaceWith: '_'
}));

const secret = process.env.SECRET||'testsectret';

const store = new MongoStore({
    mongoUrl : dbUrl,
    secret,
    touchAfter:20*60*60
});

store.on("error",function (e) {
    console.log("Session Store Error" , e);
})

const sessionConfig = {
    store,
    name:'soner',
    secret,
    resave:true,
    saveUninitialized:true,
    cookie :{
        httpOnly:true,
        // secure:true,
        expires :Date.now() + 1000*60*60*24*7,
        maxAge : 1000*60*60*24*7
    }
}
app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())



app.use((req,res,next)=>{
    res.locals.currentUser = req.user
    // res.locals.success = req.flash('success');
    // res.locals.error = req.flash('error');
    next();
})

app.get('/',(req,res)=>{
    res.send('home');
});


app.use('/users',userRoutes);
app.use('/material',materialRoutes);
app.use('/event',eventRoutes);

app.all('*',(req,res,next)=>{
    next(new ExpressError('Page Not Found',404));
})

app.use((err,req,res,next)=>{
    const {statusCode = 500} = err;    
    if(!err.message) err.message = 'Something Went Wrong' 
    res.status(statusCode).send(err);
})

app.listen(3000,()=>{
    console.log('Serving on port 3000!');
})