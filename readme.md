Guests to the system will arrive first at the homepage / landing page and would be able browse Events and event details as well as material list available in the system. 
A guest can become a user of the system by registering to the system as an Attendee, workshop conductor or a researcher. The admin, reviewers and editors can login to the system.  
If guest registers as an attendee, a onetime payment should be made and once confirmed would be given access to participate in events and access the material.
A researcher once registered would be able to add a research paper based on the available events that the researcher would like to participate in. Once submitted the researcher would be given access to the user profile while researcher awaits the approval of the paper by the reviewer and admin. Researcher then would need to make a payment if paper is approved to be able to participate in the event. 
A workshop conductor, after registration would require uploading workshop details and would be redirected to the user profile. 
Once the reviewer reviews the material, either accept or decline messages would be sent. 
An editor would be able to manage event details while reviewer is meant to manage materials.
Users can access these messages from the inbox. 
Once accepted, the admin would approve before the confirmed event or material makes its way to the site. 
If declined, the workshop conductors and researchers would be able to update their material and re-upload. 
If accepted, the events and materials information would be made available for the users to view or download.

##ICAF -- Internatinal Conference on Application framework 

## Run Locally

### 1. Clone repo

```
$ git clone https://github.com/asqarrsl/CMT.git
$ cd CMT
```

### 2. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - Create .env file in root folder
  - Set MONGODB_URL=mongodb://localhost/amazona
- Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - Create .env file in root folder
  - Set MONGODB_URL=mongodb+srv://your-db-connection

### 3. Run Backend

```
$ npm install
$ npm start
```

### 4. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```


### 6. Login

- Run http://localhost:1234/login
- Enter admin credentials


### 7. Register 

- Run http://localhost:1234/register
- Enter admin credentials
