import React from 'react'
import './contact.css';
import Star from '../Star/Star';



const Contact = () => {
  return (
    <div className='contact' id='contact'>

    <Star count={30} />

      <h2>Contact Me</h2>
      <p1>Let's Talk!</p1>

      <div className='box'>
      <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTE0LDRjLTUuNTExMzMsMCAtMTAsNC40ODg2NyAtMTAsMTB2MjJjMCw1LjUxMTMzIDQuNDg4NjcsMTAgMTAsMTBoMjJjNS41MTEzMywwIDEwLC00LjQ4ODY3IDEwLC0xMHYtMjJjMCwtNS41MTEzMyAtNC40ODg2NywtMTAgLTEwLC0xMHpNMTMsMTZoMjRjMC4xOCwwIDAuMzQ5NzcsMC4wMjAzMSAwLjUwOTc3LDAuMDcwMzFsLTkuODMwMDgsOS44MjAzMWMtMS40OCwxLjQ4IC0zLjg4OTE0LDEuNDggLTUuMzY5MTQsMGwtOS44MjAzMSwtOS44MjAzMWMwLjE2LC0wLjA1IDAuMzI5NzcsLTAuMDcwMzEgMC41MDk3NywtMC4wNzAzMXpNMTEuMDcwMzEsMTcuNDkwMjNsNy41MTk1Myw3LjUwOTc3bC03LjUxOTUzLDcuNTA5NzdjLTAuMDUsLTAuMTYgLTAuMDcwMzEsLTAuMzI5NzcgLTAuMDcwMzEsLTAuNTA5Nzd2LTE0YzAsLTAuMTggMC4wMjAzMSwtMC4zNDk3NyAwLjA3MDMxLC0wLjUwOTc3ek0zOC45Mjk2OSwxNy40OTAyM2MwLjA1LDAuMTYgMC4wNzAzMSwwLjMyOTc3IDAuMDcwMzEsMC41MDk3N3YxNGMwLDAuMTggLTAuMDIwMzEsMC4zNDk3NyAtMC4wNzAzMSwwLjUwOTc3bC03LjUyOTMsLTcuNTA5Nzd6TTIwLDI2LjQxMDE2bDAuODkwNjMsMC45MDAzOWMxLjEzLDEuMTMgMi42MTk2MSwxLjY4OTQ1IDQuMDk5NjEsMS42ODk0NWMxLjQ5LDAgMi45Njk2MSwtMC41NTk0NSA0LjA5OTYxLC0xLjY4OTQ1bDAuOTAwMzksLTAuOTAwMzlsNy41MTk1Myw3LjUxOTUzYy0wLjE2LDAuMDUgLTAuMzI5NzcsMC4wNzAzMSAtMC41MDk3NywwLjA3MDMxaC0yNGMtMC4xOCwwIC0wLjM0OTc3LC0wLjAyMDMxIC0wLjUwOTc3LC0wLjA3MDMxeiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="/>
        <a href="mailto:naomi.aiy05@gmail.com">
          <p>naomi.aiy05@gmail.com</p>
        </a>
      </div>
    </div>
  )
}

export default Contact;
