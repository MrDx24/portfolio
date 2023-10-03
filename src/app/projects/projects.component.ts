import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  id:any=1;
  check:any=0;

  project = [
    {
    "project_id": 1,
    "project_name": "Elegant Photography and Films",
    "project_desp": {
      "line1": "Designed and implemented a responsive portfolio website using the MEAN Stack (MongoDB, Express, Angular, Node), enhancing the visual representation of the photographer's work across different categories.",
      "line2": "Engineered an admin page to facilitate easy updates and image deletions, providing seamless content management.",
      "line3": "Implemented an innovative image thumbnail selection feature for category thumbnails, enhancing user experience and navigation."
    },
    "project_type": "Self-development project",
    "project_duration": "June 2023 - July 2023"
    },
    {
      "project_id": 2,
      "project_name": "Text Summarization using TFIDF and Textrank Algorithm",
      "project_desp": {
        "line1": "Developed a user-friendly web application utilizing Angular and Flask for text summarization, enabling users to receive concise summaries from input sources (text, URLs, files).",
        "line2": "Summary is generated using TFIDF and Textrank algorithm to generate accurate and effective summaries.",
        "line3": "Created downloadable PDF reports containing essential information for users containing: Time, Date, Method for Summary generation, Original Text/Url/File name and Result summary."
      },
      "project_type": "Final tear project",
      "project_duration": "June 2020 - July 2021"
    },
    {
      "project_id": 3,
      "project_name": "Canteen Management System",
      "project_desp": {
        "line1": "Developed a user-friendly web application utilizing Angular and Flask for text summarization, enabling users to receive concise summaries from input sources (text, URLs, files).",
        "line2": "Summary is generated using TFIDF and Textrank algorithm to generate accurate and effective summaries.",
        "line3": "Created downloadable PDF reports containing essential information for users containing: Time, Date, Method for Summary generation, Original Text/Url/File name and Result summary."
      },
      "project_type": "Final tear project",
      "project_duration": "June 2020 - July 2021"
    },
    {
      "project_id": 4,
      "project_name": "Smart Parking System",
      "project_desp": {
        "line1": "Developed a user-friendly web application utilizing Angular and Flask for text summarization, enabling users to receive concise summaries from input sources (text, URLs, files).",
        "line2": "Summary is generated using TFIDF and Textrank algorithm to generate accurate and effective summaries.",
        "line3": "Created downloadable PDF reports containing essential information for users containing: Time, Date, Method for Summary generation, Original Text/Url/File name and Result summary."
      },
      "project_type": "Final tear project",
      "project_duration": "June 2020 - July 2021"
    }
  ]


}


