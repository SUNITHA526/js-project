import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase,get,set, ref } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyAirN8OZ1ySvBsU4uxargwF7cg5QWsQFW8",
    authDomain: "signup-and-login-page-35ecc.firebaseapp.com",
    projectId: "signup-and-login-page-35ecc",
    storageBucket: "signup-and-login-page-35ecc.firebasestorage.app",
    messagingSenderId: "6015295795",
    appId: "1:6015295795:web:499ba34908ac7899b11e46",
    measurementId: "G-N3LEB4RQ3F"
  };

   const app = initializeApp(firebaseConfig);
   const database = getDatabase(app);

    const movie_stored={"movies": {
    "telugu": [
      {"movie_name": "Baahubali: The Beginning", "movie_artists": "Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah", "movie_year": 2015, "movie_language": "Telugu", "movie_director": "S.S. Rajamouli", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt2631186/"},
      {"movie_name": "Pushpa: The Rise", "movie_artists": "Allu Arjun, Rashmika Mandanna, Fahadh Faasil", "movie_year": 2021, "movie_language": "Telugu", "movie_director": "Sukumar", "movie_category": "Action, Thriller", "movie_url": "https://www.imdb.com/title/tt9389998/"},
      {"movie_name": "Arjun Reddy", "movie_artists": "Vijay Deverakonda, Shalini Pandey", "movie_year": 2017, "movie_language": "Telugu", "movie_director": "Sandeep Reddy Vanga", "movie_category": "Romance, Drama", "movie_url": "https://www.imdb.com/title/tt7294534/"},
      {"movie_name": "Eega", "movie_artists": "Nani, Samantha Ruth Prabhu, Sudeep", "movie_year": 2012, "movie_language": "Telugu", "movie_director": "S.S. Rajamouli", "movie_category": "Fantasy, Thriller", "movie_url": "https://www.imdb.com/title/tt2258337/"},
      {"movie_name": "Magadheera", "movie_artists": "Ram Charan, Kajal Aggarwal, Dev Gill", "movie_year": 2009, "movie_language": "Telugu", "movie_director": "S.S. Rajamouli", "movie_category": "Action, Fantasy", "movie_url": "https://www.imdb.com/title/tt1447500/"},
      {"movie_name": "Ala Vaikunthapurramuloo", "movie_artists": "Allu Arjun, Pooja Hegde, Tabu", "movie_year": 2020, "movie_language": "Telugu", "movie_director": "Trivikram Srinivas", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt10622458/"},
      {"movie_name": "Srimanthudu", "movie_artists": "Mahesh Babu, Shruti Haasan", "movie_year": 2015, "movie_language": "Telugu", "movie_director": "Koratala Siva", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt4679210/"},
      {"movie_name": "Bharat Ane Nenu", "movie_artists": "Mahesh Babu, Kiara Advani", "movie_year": 2018, "movie_language": "Telugu", "movie_director": "Koratala Siva", "movie_category": "Drama, Political", "movie_url": "https://www.imdb.com/title/tt7392212/"},
      {"movie_name": "Rangasthalam", "movie_artists": "Ram Charan, Samantha Ruth Prabhu", "movie_year": 2018, "movie_language": "Telugu", "movie_director": "Sukumar", "movie_category": "Drama, Action", "movie_url": "https://www.imdb.com/title/tt7392212/"},
      {"movie_name": "Mahanati", "movie_artists": "Keerthy Suresh, Dulquer Salmaan", "movie_year": 2018, "movie_language": "Telugu", "movie_director": "Nag Ashwin", "movie_category": "Biography, Drama", "movie_url": "https://www.imdb.com/title/tt7609114/"},
      {"movie_name": "Fidaa", "movie_artists": "Varun Tej, Sai Pallavi", "movie_year": 2017, "movie_language": "Telugu", "movie_director": "Sekhar Kammula", "movie_category": "Romance, Drama", "movie_url": "https://www.imdb.com/title/tt6685596/"},
      {"movie_name": "Jersey", "movie_artists": "Nani, Shraddha Srinath", "movie_year": 2019, "movie_language": "Telugu", "movie_director": "Gowtam Tinnanuri", "movie_category": "Drama, Sport", "movie_url": "https://www.imdb.com/title/tt8948790/"},
      {"movie_name": "Maharshi", "movie_artists": "Mahesh Babu, Pooja Hegde", "movie_year": 2019, "movie_language": "Telugu", "movie_director": "Vamshi Paidipally", "movie_category": "Drama, Action", "movie_url": "https://www.imdb.com/title/tt8902990/"},
      {"movie_name": "Sarileru Neekevvaru", "movie_artists": "Mahesh Babu, Rashmika Mandanna", "movie_year": 2020, "movie_language": "Telugu", "movie_director": "Anil Ravipudi", "movie_category": "Action, Comedy", "movie_url": "https://www.imdb.com/title/tt10579952/"},
      {"movie_name": "Aravinda Sametha Veera Raghava", "movie_artists": "Jr. NTR, Pooja Hegde", "movie_year": 2018, "movie_language": "Telugu", "movie_director": "Trivikram Srinivas", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt8176054/"},
      {"movie_name": "Nannaku Prematho", "movie_artists": "Jr. NTR, Rakul Preet Singh", "movie_year": 2016, "movie_language": "Telugu", "movie_director": "Sukumar", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt5311546/"},
      {"movie_name": "Janatha Garage", "movie_artists": "Jr. NTR, Mohanlal", "movie_year": 2016, "movie_language": "Telugu", "movie_director": "Koratala Siva", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt5822648/"},
      {"movie_name": "Geetha Govindam", "movie_artists": "Vijay Deverakonda, Rashmika Mandanna", "movie_year": 2018, "movie_language": "Telugu", "movie_director": "Parasuram", "movie_category": "Romance, Comedy", "movie_url": "https://www.imdb.com/title/tt8590896/"},
      {"movie_name": "Majili", "movie_artists": "Nani, Samantha Ruth Prabhu", "movie_year": 2019, "movie_language": "Telugu", "movie_director": "Shiva Nirvana", "movie_category": "Romance, Drama", "movie_url": "https://www.imdb.com/title/tt8902990/"},
      {"movie_name": "Uppena", "movie_artists": "Panja Vaisshnav Tej, Krithi Shetty", "movie_year": 2021, "movie_language": "Telugu", "movie_director": "Buchi Babu Sana", "movie_category": "Romance, Drama", "movie_url": "https://www.imdb.com/title/tt11580854/"},
      {"movie_name": "Vakeel Saab", "movie_artists": "Pawan Kalyan, Nivetha Thomas", "movie_year": 2021, "movie_language": "Telugu", "movie_director": "Venu Sriram", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt11324144/"},
      {"movie_name": "Bheeshma", "movie_artists": "Nithiin, Rashmika Mandanna", "movie_year": 2020, "movie_language": "Telugu", "movie_director": "Venky Kudumula", "movie_category": "Romance, Comedy", "movie_url": "https://www.imdb.com/title/tt11324144/"},
      {"movie_name": "Krack", "movie_artists": "Ravi Teja, Shruti Haasan", "movie_year": 2021, "movie_language": "Telugu", "movie_director": "Gopichand Malineni", "movie_category": "Action, Thriller", "movie_url": "https://www.imdb.com/title/tt11324144/"},
      {"movie_name": "Jathi Ratnalu", "movie_artists": "Naveen Polishetty, Priyadarshi", "movie_year": 2021, "movie_language": "Telugu", "movie_director": "Anudeep KV", "movie_category": "Comedy, Drama", "movie_url": "https://www.imdb.com/title/tt11324144/"},
      {"movie_name": "Shyam Singha Roy", "movie_artists": "Nani, Sai Pallavi", "movie_year": 2021, "movie_language": "Telugu", "movie_director": "Rahul Sankrityan", "movie_category": "Drama, Thriller", "movie_url": "https://www.imdb.com/title/tt11324144/"}
    ],
    "kannada": [
      {"movie_name": "KGF: Chapter 1", "movie_artists": "Yash, Srinidhi Shetty, Anant Nag", "movie_year": 2018, "movie_language": "Kannada", "movie_director": "Prashanth Neel", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt7838252/"},
      {"movie_name": "Kantara", "movie_artists": "Rishab Shetty, Kishore, Achyuth Kumar", "movie_year": 2022, "movie_language": "Kannada", "movie_director": "Rishab Shetty", "movie_category": "Action, Drama, Fantasy", "movie_url": "https://www.imdb.com/title/tt15327088/"},
      {"movie_name": "Mungaru Male", "movie_artists": "Ganesh, Pooja Gandhi", "movie_year": 2006, "movie_language": "Kannada", "movie_director": "Yogaraj Bhat", "movie_category": "Romance, Drama", "movie_url": "https://www.imdb.com/title/tt1077264/"},
      {"movie_name": "Ulidavaru Kandanthe", "movie_artists": "Rakshit Shetty, Sheetal Shetty", "movie_year": 2014, "movie_language": "Kannada", "movie_director": "Rakshit Shetty", "movie_category": "Crime, Drama", "movie_url": "https://www.imdb.com/title/tt3562022/"},
      {"movie_name": "Kirik Party", "movie_artists": "Rakshit Shetty, Rashmika Mandanna", "movie_year": 2016, "movie_language": "Kannada", "movie_director": "Rishab Shetty", "movie_category": "Comedy, Drama", "movie_url": "https://www.imdb.com/title/tt5411956/"},
      {"movie_name": "Lucia", "movie_artists": "Sathish Neenasam, Shruthi Hariharan", "movie_year": 2013, "movie_language": "Kannada", "movie_director": "Pawan Kumar", "movie_category": "Drama, Thriller", "movie_url": "https://www.imdb.com/title/tt2358592/"},
      {"movie_name": "Tagaru", "movie_artists": "Shivrajkumar, Vasishta N. Simha", "movie_year": 2018, "movie_language": "Kannada", "movie_director": "Duniya Soori", "movie_category": "Action, Crime", "movie_url": "https://www.imdb.com/title/tt8108202/"},
      {"movie_name": "Kavaludaari", "movie_artists": "Rishi, Anant Nag", "movie_year": 2019, "movie_language": "Kannada", "movie_director": "Hemanth M. Rao", "movie_category": "Crime, Thriller", "movie_url": "https://www.imdb.com/title/tt8239946/"},
      {"movie_name": "RangiTaranga", "movie_artists": "Nirup Bhandari, Radhika Chetan", "movie_year": 2015, "movie_language": "Kannada", "movie_director": "Anup Bhandari", "movie_category": "Mystery, Thriller", "movie_url": "https://www.imdb.com/title/tt4825524/"},
      {"movie_name": "Garuda Gamana Vrishabha Vahana", "movie_artists": "Raj B. Shetty, Rishab Shetty", "movie_year": 2021, "movie_language": "Kannada", "movie_director": "Raj B. Shetty", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt11156204/"},
      {"movie_name": "Dia", "movie_artists": "Kushee Ravi, Pruthvi Ambaar", "movie_year": 2020, "movie_language": "Kannada", "movie_director": "K.S. Ashoka", "movie_category": "Romance, Drama", "movie_url": "https://www.imdb.com/title/tt11394276/"},
      {"movie_name": "Bell Bottom", "movie_artists": "Rishab Shetty, Hariprriya", "movie_year": 2019, "movie_language": "Kannada", "movie_director": "Jayatheertha", "movie_category": "Comedy, Crime", "movie_url": "https://www.imdb.com/title/tt10431500/"},
      {"movie_name": "Act 1978", "movie_artists": "Dhananjaya, Samyuktha Hornad", "movie_year": 2019, "movie_language": "Kannada", "movie_director": "Sachin", "movie_category": "Drama, Thriller", "movie_url": "https://www.imdb.com/title/tt10431500/"},
      {"movie_name": "Roberrt", "movie_artists": "Darshan, Jagapathi Babu", "movie_year": 2021, "movie_language": "Kannada", "movie_director": "Tharun Kishore Sudhir", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt10431500/"},
      {"movie_name": "Yuvarathnaa", "movie_artists": "Puneeth Rajkumar, Sayyeshaa", "movie_year": 2021, "movie_language": "Kannada", "movie_director": "Santhosh Ananddram", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt10431500/"},
      {"movie_name": "Bharaate", "movie_artists": "Sriimurali, Meghana Raj", "movie_year": 2019, "movie_language": "Kannada", "movie_director": "Chethan Kumar", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt10431500/"},
      {"movie_name": "Kotigobba 3", "movie_artists": "Sudeep, Madonna Sebastian", "movie_year": 2021, "movie_language": "Kannada", "movie_director": "Shiva Karthikeyan", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt10431500/"},
      {"movie_name": "Salaga", "movie_artists": "Dhananjaya, Amrutha Iyengar", "movie_year": 2021, "movie_language": "Kannada", "movie_director": "Duniya Soori", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt10431500/"},
      {"movie_name": "Rathavara", "movie_artists": "Sharan, Aindrita Ray", "movie_year": 2021, "movie_language": "Kannada", "movie_director": "Ravi Srivatsa", "movie_category": "Comedy, Drama", "movie_url": "https://www.imdb.com/title/tt10431500/"},
      {"movie_name": "Bhajarangi 2", "movie_artists": "Shivrajkumar, Bhavana", "movie_year": 2021, "movie_language": "Kannada", "movie_director": "A. Harsha", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt10431500/"}
    ],
    "hindi": [
      {"movie_name": "Sholay", "movie_artists": "Amitabh Bachchan, Dharmendra, Hema Malini", "movie_year": 1975, "movie_language": "Hindi", "movie_director": "Ramesh Sippy", "movie_category": "Action, Adventure, Drama", "movie_url": "https://www.imdb.com/title/tt0073707/"},
      {"movie_name": "Dangal", "movie_artists": "Aamir Khan, Fatima Sana Shaikh, Sanya Malhotra", "movie_year": 2016, "movie_language": "Hindi", "movie_director": "Nitesh Tiwari", "movie_category": "Biography, Drama, Sport", "movie_url": "https://www.imdb.com/title/tt5074352/"},
      {"movie_name": "3 Idiots", "movie_artists": "Aamir Khan, Kareena Kapoor, R. Madhavan", "movie_year": 2009, "movie_language": "Hindi", "movie_director": "Rajkumar Hirani", "movie_category": "Comedy, Drama", "movie_url": "https://www.imdb.com/title/tt1187043/"},
      {"movie_name": "Lagaan", "movie_artists": "Aamir Khan, Gracy Singh, Rachel Shelley", "movie_year": 2001, "movie_language": "Hindi", "movie_director": "Ashutosh Gowariker", "movie_category": "Drama, Sport", "movie_url": "https://www.imdb.com/title/tt0169102/"},
      {"movie_name": "PK", "movie_artists": "Aamir Khan, Anushka Sharma, Sushant Singh Rajput", "movie_year": 2014, "movie_language": "Hindi", "movie_director": "Rajkumar Hirani", "movie_category": "Comedy, Drama", "movie_url": "https://www.imdb.com/title/tt2338151/"},
      {"movie_name": "Bajrangi Bhaijaan", "movie_artists": "Salman Khan, Kareena Kapoor, Nawazuddin Siddiqui", "movie_year": 2015, "movie_language": "Hindi", "movie_director": "Kabir Khan", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt3863552/"},
      {"movie_name": "Dilwale Dulhania Le Jayenge", "movie_artists": "Shah Rukh Khan, Kajol, Amrish Puri", "movie_year": 1995, "movie_language": "Hindi", "movie_director": "Aditya Chopra", "movie_category": "Romance, Drama", "movie_url": "https://www.imdb.com/title/tt0112870/"},
      {"movie_name": "Kabhi Khushi Kabhie Gham", "movie_artists": "Shah Rukh Khan, Kajol, Amitabh Bachchan", "movie_year": 2001, "movie_language": "Hindi", "movie_director": "Karan Johar", "movie_category": "Drama, Romance", "movie_url": "https://www.imdb.com/title/tt0248126/"},
      {"movie_name": "Chennai Express", "movie_artists": "Shah Rukh Khan, Deepika Padukone", "movie_year": 2013, "movie_language": "Hindi", "movie_director": "Rohit Shetty", "movie_category": "Action, Comedy", "movie_url": "https://www.imdb.com/title/tt2112124/"},
      {"movie_name": "Padmaavat", "movie_artists": "Deepika Padukone, Ranveer Singh, Shahid Kapoor", "movie_year": 2018, "movie_language": "Hindi", "movie_director": "Sanjay Leela Bhansali", "movie_category": "Drama, History", "movie_url": "https://www.imdb.com/title/tt5935704/"},
      {"movie_name": "Gully Boy", "movie_artists": "Ranveer Singh, Alia Bhatt, Siddhant Chaturvedi", "movie_year": 2019, "movie_language": "Hindi", "movie_director": "Zoya Akhtar", "movie_category": "Drama, Music", "movie_url": "https://www.imdb.com/title/tt2395469/"},
      {"movie_name": "Uri: The Surgical Strike", "movie_artists": "Vicky Kaushal, Yami Gautam, Paresh Rawal", "movie_year": 2019, "movie_language": "Hindi", "movie_director": "Aditya Dhar", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt8291224/"},
      {"movie_name": "Andhadhun", "movie_artists": "Ayushmann Khurrana, Tabu, Radhika Apte", "movie_year": 2018, "movie_language": "Hindi", "movie_director": "Sriram Raghavan", "movie_category": "Crime, Thriller", "movie_url": "https://www.imdb.com/title/tt8108198/"},
      {"movie_name": "Badhaai Ho", "movie_artists": "Ayushmann Khurrana, Neena Gupta, Gajraj Rao", "movie_year": 2018, "movie_language": "Hindi", "movie_director": "Amit Ravindernath Sharma", "movie_category": "Comedy, Drama", "movie_url": "https://www.imdb.com/title/tt7725596/"},
      {"movie_name": "Article 15", "movie_artists": "Ayushmann Khurrana, Nassar, Manoj Pahwa", "movie_year": 2019, "movie_language": "Hindi", "movie_director": "Anubhav Sinha", "movie_category": "Crime, Drama", "movie_url": "https://www.imdb.com/title/tt10324144/"},
      {"movie_name": "Stree", "movie_artists": "Rajkummar Rao, Shraddha Kapoor, Pankaj Tripathi", "movie_year": 2018, "movie_language": "Hindi", "movie_director": "Amar Kaushik", "movie_category": "Comedy, Horror", "movie_url": "https://www.imdb.com/title/tt8108202/"},
      {"movie_name": "Tanu Weds Manu", "movie_artists": "R. Madhavan, Kangana Ranaut, Jimmy Sheirgill", "movie_year": 2011, "movie_language": "Hindi", "movie_director": "Aanand L. Rai", "movie_category": "Comedy, Drama", "movie_url": "https://www.imdb.com/title/tt1447500/"},
      {"movie_name": "Queen", "movie_artists": "Kangana Ranaut, Rajkummar Rao, Lisa Haydon", "movie_year": 2014, "movie_language": "Hindi", "movie_director": "Vikas Bahl", "movie_category": "Comedy, Drama", "movie_url": "https://www.imdb.com/title/tt3322420/"},
      {"movie_name": "Zindagi Na Milegi Dobara", "movie_artists": "Hrithik Roshan, Farhan Akhtar, Abhay Deol", "movie_year": 2011, "movie_language": "Hindi", "movie_director": "Zoya Akhtar", "movie_category": "Comedy, Drama", "movie_url": "https://www.imdb.com/title/tt1562872/"},
      {"movie_name": "Barfi!", "movie_artists": "Ranbir Kapoor, Priyanka Chopra, Ileana D'Cruz", "movie_year": 2012, "movie_language": "Hindi", "movie_director": "Anurag Basu", "movie_category": "Comedy, Drama", "movie_url": "https://www.imdb.com/title/tt2082197/"},
      {"movie_name": "Rockstar", "movie_artists": "Ranbir Kapoor, Nargis Fakhri", "movie_year": 2011, "movie_language": "Hindi", "movie_director": "Imtiaz Ali", "movie_category": "Drama, Music", "movie_url": "https://www.imdb.com/title/tt1839596/"},
      {"movie_name": "Yeh Jawaani Hai Deewani", "movie_artists": "Ranbir Kapoor, Deepika Padukone, Aditya Roy Kapur", "movie_year": 2013, "movie_language": "Hindi", "movie_director": "Ayan Mukerji", "movie_category": "Comedy, Drama", "movie_url": "https://www.imdb.com/title/tt2178470/"},
      {"movie_name": "Kabir Singh", "movie_artists": "Shahid Kapoor, Kiara Advani", "movie_year": 2019, "movie_language": "Hindi", "movie_director": "Sandeep Reddy Vanga", "movie_category": "Drama, Romance", "movie_url": "https://www.imdb.com/title/tt7946442/"},
      {"movie_name": "Chhichhore", "movie_artists": "Sushant Singh Rajput, Shraddha Kapoor", "movie_year": 2019, "movie_language": "Hindi", "movie_director": "Nitesh Tiwari", "movie_category": "Comedy, Drama", "movie_url": "https://www.imdb.com/title/tt9052870/"},
      {"movie_name": "War", "movie_artists": "Hrithik Roshan, Tiger Shroff, Vaani Kapoor", "movie_year": 2019, "movie_language": "Hindi", "movie_director": "Siddharth Anand", "movie_category": "Action, Thriller", "movie_url": "https://www.imdb.com/title/tt7430722/"}
    ],
    "tamil": [
      {"movie_name": "Vikram", "movie_artists": "Kamal Haasan, Vijay Sethupathi, Fahadh Faasil", "movie_year": 2022, "movie_language": "Tamil", "movie_director": "Lokesh Kanagaraj", "movie_category": "Action, Thriller", "movie_url": "https://www.imdb.com/title/tt9179430/"},
      {"movie_name": "Super Deluxe", "movie_artists": "Vijay Sethupathi, Fahadh Faasil, Samantha Ruth Prabhu", "movie_year": 2019, "movie_language": "Tamil", "movie_director": "Thiagarajan Kumararaja", "movie_category": "Drama, Thriller", "movie_url": "https://www.imdb.com/title/tt7019942/"},
      {"movie_name": "Kaithi", "movie_artists": "Karthi, Narain, George Maryan", "movie_year": 2019, "movie_language": "Tamil", "movie_director": "Lokesh Kanagaraj", "movie_category": "Action, Thriller", "movie_url": "https://www.imdb.com/title/tt9900782/"},
      {"movie_name": "Pariyerum Perumal", "movie_artists": "Kathir, Anandhi, Yogi Babu", "movie_year": 2018, "movie_language": "Tamil", "movie_director": "Mari Selvaraj", "movie_category": "Drama", "movie_url": "https://www.imdb.com/title/tt8176054/"},
      {"movie_name": "Asuran", "movie_artists": "Dhanush, Manju Warrier, Ken Karunas", "movie_year": 2019, "movie_language": "Tamil", "movie_director": "Vetrimaaran", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt9477520/"},
      {"movie_name": "96", "movie_artists": "Vijay Sethupathi, Trisha Krishnan", "movie_year": 2018, "movie_language": "Tamil", "movie_director": "C. Prem Kumar", "movie_category": "Drama, Romance", "movie_url": "https://www.imdb.com/title/tt7019842/"},
      {"movie_name": "Visaranai", "movie_artists": "Dinesh, Anandhi, Aadukalam Murugadoss", "movie_year": 2016, "movie_language": "Tamil", "movie_director": "Vetrimaaran", "movie_category": "Crime, Drama", "movie_url": "https://www.imdb.com/title/tt4943322/"},
      {"movie_name": "Jai Bhim", "movie_artists": "Suriya, Lijomol Jose, Manikandan", "movie_year": 2021, "movie_language": "Tamil", "movie_director": "T.J. Gnanavel", "movie_category": "Crime, Drama", "movie_url": "https://www.imdb.com/title/tt15097216/"},
      {"movie_name": "Sarpatta Parambarai", "movie_artists": "Arya, Dushara Vijayan, John Kokken", "movie_year": 2021, "movie_language": "Tamil", "movie_director": "Pa. Ranjith", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt11678932/"},
      {"movie_name": "Karnan", "movie_artists": "Dhanush, Rajisha Vijayan, Lal", "movie_year": 2021, "movie_language": "Tamil", "movie_director": "Mari Selvaraj", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt11324144/"},
      {"movie_name": "Petta", "movie_artists": "Rajinikanth, Vijay Sethupathi, Nawazuddin Siddiqui", "movie_year": 2019, "movie_language": "Tamil", "movie_director": "Karthik Subbaraj", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt8176054/"},
      {"movie_name": "Master", "movie_artists": "Vijay, Vijay Sethupathi, Malavika Mohanan", "movie_year": 2021, "movie_language": "Tamil", "movie_director": "Lokesh Kanagaraj", "movie_category": "Action, Thriller", "movie_url": "https://www.imdb.com/title/tt10648456/"},
      {"movie_name": "Kaala", "movie_artists": "Rajinikanth, Nana Patekar, Huma Qureshi", "movie_year": 2018, "movie_language": "Tamil", "movie_director": "Pa. Ranjith", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt8000908/"},
      {"movie_name": "I", "movie_artists": "Vikram, Amy Jackson, Upen Patel", "movie_year": 2015, "movie_language": "Tamil", "movie_director": "S. Shankar", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt1366344/"},
      {"movie_name": "Enthiran", "movie_artists": "Rajinikanth, Aishwarya Rai Bachchan", "movie_year": 2010, "movie_language": "Tamil", "movie_director": "S. Shankar", "movie_category": "Action, Sci-Fi", "movie_url": "https://www.imdb.com/title/tt1305797/"},
      {"movie_name": "2.0", "movie_artists": "Rajinikanth, Akshay Kumar, Amy Jackson", "movie_year": 2018, "movie_language": "Tamil", "movie_director": "S. Shankar", "movie_category": "Action, Sci-Fi", "movie_url": "https://www.imdb.com/title/tt5083738/"},
      {"movie_name": "Thuppakki", "movie_artists": "Vijay, Kajal Aggarwal, Vidyut Jammwal", "movie_year": 2012, "movie_language": "Tamil", "movie_director": "A.R. Murugadoss", "movie_category": "Action, Thriller", "movie_url": "https://www.imdb.com/title/tt2187153/"},
      {"movie_name": "Mersal", "movie_artists": "Vijay, Samantha Ruth Prabhu, Kajal Aggarwal", "movie_year": 2017, "movie_language": "Tamil", "movie_director": "Atlee", "movie_category": "Action, Drama", "movie_url": "https://www.imdb.com/title/tt6484982/"}]
    }}


    console.log(movie_stored)
const dbRef = ref(database);

    try {
    
        const snapshot = await get(dbRef);
        let movieArray = snapshot.exists() ? snapshot.val() : [];
        if (!Array.isArray(movieArray)) {
            movieArray = [];
        }
        movieArray.push(movieArray);
         await set(dbRef, movie_stored);
        console.log("Data successfully added");
        movieArray.reset();  
    } catch (error) {
        console.error("Error adding data:", error.message || error);
        console.log(error)
    }

    const db = getDatabase(app);

    const hindi = "Hindi";
    const kannada = "Kannada";
    const tamil = "Tamil";
    const telugu = "Telugu";





// const db = getDatabase(app);
const movieRef = ref(db, `movies/${hindi}/${kannada}/${tamil}/${telugu}`);  
get(movieRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log("movies:", snapshot.val());  // Logs the data if it exists
    } else {
      console.log("No data available");  // Logs this if no data exists at the specified path
    }
  })
  .catch((error) => {
    console.error("Error getting data:", error);  // Logs any errors
  }); 



    const searchinput=document.getElementById("search")
    let allmovies=[]
    const fetchmovies=()=>{
      get(movieRef)
      .then((snapshot)=>{
        if(snapshot.exists()){
            allmovies=snapshot.val()
            console.log("All data fetched", allmovies)
        }else{
          console.log("no data available");
          
        }
      })
      .catch((error)=>{
        console.error("error getting error", error)
      })
    
    };

    const searchmovies=()=>{
      const searchquery=searchinput.value.toLowerCase()
      const filteredmovies=Object.values(allmovies).filter((movies)=>{
        return (movies.movie_artists && movies.movie_artists.toLowerCase().includes(searchquery) ||
        (movies.movie_category && movies.movie_category.toLowerCase().includes(searchquery)) ||
        (movies.movie_director && movies.movie_director.toLowerCase().includes(searchquery)) ||
        (movies.movie_language && movies.movie_language.toLowerCase().includes(searchquery)) ||
        (movies.movie_name && movies.movie_name.toLowerCase().includes(searchquery)) 
        )
    })
      displayMovies(filteredmovies);
    };
  
    





