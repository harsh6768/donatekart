# donatekart


1. Clone project 

      git clone https://github.com/harsh6768/node-login.git
      
2. Install dependency using npm 

      npm i 

      or 

      npm install

     
3. Create .env file in root directory and copy the content of .env.example file

4. Run project using below command

    npm start
    
    or 
    
    if you have nodemon installed globally
    
    nodemon index.js
    
5.  Apis : 

   ### 1. Add an endpoint to get a list of campaigns.
Make a call to external API https://testapi.donatekart.com/api/campaign to fetch the
campaigns and sort them by Total Amount in descending order and return the
campaigns. The result returned should contain the fields Title, Total Amount, Backers
Count and End Date.

     METHOD : GET 
     END_POINT : http://localhost:3001/api/v1/campaign/getAllComapign
     
   ### 2. Add an endpoint to get active campaigns that are created within the last 1 month.
Make a call to external API https://testapi.donatekart.com/api/campaign to fetch
campaigns and filter active campaigns. A campaign is active if the end date is greater
than or equal to today. Filter the list further to get the campaigns that are created within
the last 30 days.

     METHOD : GET 
     END_POINT : http://localhost:3001/api/v1/campaign/getActiveCampaign
     
  ### 3. Add an endpoint to get closed campaigns.
Make a call to external API https://testapi.donatekart.com/api/campaign to fetch
campaigns and filter closed campaigns. A campaign is closed if the end date is less than
today, or Procured Amount is greater than or equal to Total Amount.

    METHOD : GET
    END_POINT : http://localhost:3001/api/v1/campaign/getActiveCampaign
    
