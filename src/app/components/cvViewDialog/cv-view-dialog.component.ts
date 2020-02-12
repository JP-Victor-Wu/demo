import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-cv-view-dialog',
  templateUrl: './cv-view-dialog.component.html',
  styleUrls: ['./cv-view-dialog.component.css'],


})
export class CVViewDialogComponent implements OnInit {
  cvObject: any;

  // generatePdf(){
  //   const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
  //   pdfMake.createPdf(documentDefinition).open();
  // }

  constructor() { }

  ngOnInit() {
    // Get data from localstorage
    this.cvObject = JSON.parse(localStorage.getItem('cv'))
    console.log(this.cvObject)
  }

  generatePdf(action = 'open') {
    const documentDefinition = this.getDocumentDefinition();
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download(); break;
      default: pdfMake.createPdf(documentDefinition).open(); break;
    }
  }

  getDocumentDefinition() {
    sessionStorage.setItem('resume', JSON.stringify(this.cvObject));
    return {
      content: [
        {
          text: 'RESUME',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [{
              text: this.cvObject.firstName + ' ' + this.cvObject.lastName,
              style: 'name'
            },
            {
              text: this.cvObject.address
            },
            {
              text: 'Email : ' + this.cvObject.email,
            },
            {
              text: 'Contant No : ' + this.cvObject.phone,
            },
            {
              text: 'GitHub: ' + this.cvObject.github,
              link: this.cvObject.github,
              color: 'blue',
            }
            ],
            [
              // this.getProfilePicObject()
            ]
          ]
        },
        {
          text: 'Skills',
          style: 'header'
        },
        {
          columns: [
            {
              ul: [
                ...this.cvObject.skill.filter((value, index) => index % 3 === 0).map(s => s.value)
              ]
            },
            {
              ul: [
                ...this.cvObject.skill.filter((value, index) => index % 3 === 1).map(s => s.value)
              ]
            },
            {
              ul: [
                ...this.cvObject.skill.filter((value, index) => index % 3 === 2).map(s => s.value)
              ]
            }
          ]
        },
        {
          text: 'Experience',
          style: 'header'
        },
        this.getExperienceObject(this.cvObject.work),
        {
          text: 'Education',
          style: 'header'
        },
        this.getEducationObject(this.cvObject.edu),
        {
          text: 'Other Details',
          style: 'header'
        },
        {
          text: this.cvObject.statement
        },
        {
          text: 'Signature',
          style: 'sign'
        },
        {
          columns: [
            { qr: this.cvObject.firstName + ' ' + this.cvObject.lastName + ', Contact No : ' + this.cvObject.phone, fit: 100 },
            {
              text: `(${(this.cvObject.firstName, this.cvObject.lastName)})`,
              alignment: 'right',
            }
          ]
        }
      ],
      info: {
        title: this.cvObject.firstName + '_RESUME',
        author: this.cvObject.firstName,
        subject: 'RESUME',
        keywords: 'RESUME, ONLINE RESUME',
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        name: {
          fontSize: 16,
          bold: true
        },
        jobTitle: {
          fontSize: 14,
          bold: true,
          italics: true
        },
        sign: {
          margin: [0, 50, 0, 10],
          alignment: 'right',
          italics: true
        },
        tableHeader: {
          bold: true,
        }
      }
    };
  }
  
  getExperienceObject(experiences) {
    const exs = [];
    experiences.forEach(experience => {
      exs.push(
        [{
          columns: [
            [{
              text: experience.workName + experience.workTitle,
              style: 'jobTitle'
            },
            {
              text: experience.employer,
            },
            {
              text: experience.workDescription,
            }],
            {
              text: 'From:' + experience.workStart + ' To: ' + experience.workEnd,
              alignment: 'right'
            }
          ]
        }]
      );
    });
    return {
      table: {
        widths: ['*'],
        body: [
          ...exs
        ]
      }
    };
  }

  getEducationObject(educations) {
    return {
      table: {
        widths: ['*', '*', '*', '*'],
        body: [
          [{
            text: 'Degree',
            style: 'tableHeader'
          },
          {
            text: 'College',
            style: 'tableHeader'
          },
          {
            text: 'Passing Year',
            style: 'tableHeader'
          },
          {
            text: 'Result',
            style: 'tableHeader'
          },
          ],
          ...educations.map(ed => {
            return [ed.eduQualification, ed.eduName, ed.eduStart, ed.eduDescription];
          })
        ]
      }
    };
  }

}

