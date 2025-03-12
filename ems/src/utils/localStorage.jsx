
const employees= [
    {
      "id": 1,
      "firstname": "Aarav",
      "name": "Aarav Sharma",
      "email": "employee1@example.com",
      "password": "123",
      "task_numbers": {
        "active": 2,
        "new_task": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "title": "Prepare Monthly Report",
          "description": "Compile sales and revenue data for the past month.",
          "date": "2025-03-10",
          "category": "Finance",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update Client Database",
          "description": "Verify and update client contact details.",
          "date": "2025-03-08",
          "category": "Data Entry",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Review Project Proposal",
          "description": "Analyze the feasibility of the new project proposal.",
          "date": "2025-03-12",
          "category": "Management",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "firstname": "Ananya",
      "name": "Ananya Verma",
      "email": "employee2@example.com",
      "password": "123",
      "task_numbers": {
        "active": 2,
        "new_task": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "title": "Design Marketing Poster",
          "description": "Create a promotional poster for the upcoming campaign.",
          "date": "2025-03-07",
          "category": "Design",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Prepare Training Materials",
          "description": "Create slides and documents for the employee training session.",
          "date": "2025-03-15",
          "category": "HR",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix Website Bugs",
          "description": "Identify and resolve reported issues on the company website.",
          "date": "2025-03-10",
          "category": "IT",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "firstname": "Rahul",
      "name": "Rahul Mehta",
      "email": "employee3@example.com",
      "password": "123",
      "task_numbers": {
        "active": 1,
        "new_task": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "title": "Coordinate Team Meeting",
          "description": "Schedule and facilitate a weekly team meeting.",
          "date": "2025-03-11",
          "category": "Management",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Draft Press Release",
          "description": "Write and review the press release for the new product launch.",
          "date": "2025-03-14",
          "category": "Public Relations",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "firstname": "Priya",
      "name": "Priya Reddy",
      "email": "employee4@example.com",
      "password": "123",
      "task_numbers": {
        "active": 1,
        "new_task": 0,
        "completed": 0,
        "failed": 1
      },
      "tasks": [
        {
          "title": "Update Inventory Records",
          "description": "Check stock levels and update the system.",
          "date": "2025-03-09",
          "category": "Logistics",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Assist Customer Support",
          "description": "Handle customer queries and resolve complaints.",
          "date": "2025-03-07",
          "category": "Support",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "firstname": "Vikram",
      "name": "Vikram Nair",
      "email": "employee5@example.com",
      "password": "123",
      "task_numbers": {
        "active": 3,
        "new_task": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "title": "Optimize Database Performance",
          "description": "Improve query execution times and indexing.",
          "date": "2025-03-13",
          "category": "IT",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Develop API Endpoints",
          "description": "Create and test new API functionalities.",
          "date": "2025-03-16",
          "category": "Software Development",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Review Codebase",
          "description": "Perform a detailed review of the existing code.",
          "date": "2025-03-08",
          "category": "Software Development",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ];
 const admin= [{
    "id": 101,
    "firstname": "Kiran",
    "name": "Kiran Iyer",
    "email": "admin@example.com",
    "password": "admin123",
    "role": "superadmin",
    "permissions": ["manage_users", "edit_settings", "view_reports"]  
}]
//create new task in local storage    
export const setLocalStorage=()=>{
      localStorage.setItem('employees',JSON.stringify(employees));
      localStorage.setItem("admin",JSON.stringify(admin))
    }
    
    export const getLocalStorage=()=>{
    const employees =  JSON.parse(localStorage.getItem('employees'));   
    const admin = JSON.parse(localStorage.getItem("admin"));
    return {employees,admin}
}

  

