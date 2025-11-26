import React from 'react'
import './footer.css';
import resume from '../../assets/Naomi A Resume.pdf';


const Footer = () => {
  return (
    <div className='footer'>
        <ul>
            <li>
              <a href="https://github.com/Naomi-Aiy" target="_blank" rel="noopener noreferrer">
              <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE1LDNjLTYuNjI3LDAgLTEyLDUuMzczIC0xMiwxMmMwLDUuNjIzIDMuODcyLDEwLjMyOCA5LjA5MiwxMS42M2MtMC4wNTYsLTAuMTYyIC0wLjA5MiwtMC4zNSAtMC4wOTIsLTAuNTgzdi0yLjA1MWMtMC40ODcsMCAtMS4zMDMsMCAtMS41MDgsMGMtMC44MjEsMCAtMS41NTEsLTAuMzUzIC0xLjkwNSwtMS4wMDljLTAuMzkzLC0wLjcyOSAtMC40NjEsLTEuODQ0IC0xLjQzNSwtMi41MjZjLTAuMjg5LC0wLjIyNyAtMC4wNjksLTAuNDg2IDAuMjY0LC0wLjQ1MWMwLjYxNSwwLjE3NCAxLjEyNSwwLjU5NiAxLjYwNSwxLjIyMmMwLjQ3OCwwLjYyNyAwLjcwMywwLjc2OSAxLjU5NiwwLjc2OWMwLjQzMywwIDEuMDgxLC0wLjAyNSAxLjY5MSwtMC4xMjFjMC4zMjgsLTAuODMzIDAuODk1LC0xLjYgMS41ODgsLTEuOTYyYy0zLjk5NiwtMC40MTEgLTUuOTAzLC0yLjM5OSAtNS45MDMsLTUuMDk4YzAsLTEuMTYyIDAuNDk1LC0yLjI4NiAxLjMzNiwtMy4yMzNjLTAuMjc2LC0wLjk0IC0wLjYyMywtMi44NTcgMC4xMDYsLTMuNTg3YzEuNzk4LDAgMi44ODUsMS4xNjYgMy4xNDYsMS40ODFjMC44OTYsLTAuMzA3IDEuODgsLTAuNDgxIDIuOTE0LC0wLjQ4MWMxLjAzNiwwIDIuMDI0LDAuMTc0IDIuOTIyLDAuNDgzYzAuMjU4LC0wLjMxMyAxLjM0NiwtMS40ODMgMy4xNDgsLTEuNDgzYzAuNzMyLDAuNzMxIDAuMzgxLDIuNjU2IDAuMTAyLDMuNTk0YzAuODM2LDAuOTQ1IDEuMzI4LDIuMDY2IDEuMzI4LDMuMjI2YzAsMi42OTcgLTEuOTA0LDQuNjg0IC01Ljg5NCw1LjA5N2MxLjA5OCwwLjU3MyAxLjg5OSwyLjE4MyAxLjg5OSwzLjM5NnYyLjczNGMwLDAuMTA0IC0wLjAyMywwLjE3OSAtMC4wMzUsMC4yNjhjNC42NzYsLTEuNjM5IDguMDM1LC02LjA3OSA4LjAzNSwtMTEuMzE1YzAsLTYuNjI3IC01LjM3MywtMTIgLTEyLC0xMnoiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/naomi-aiyevbekpen/" target="_blank" rel="noopener noreferrer">
                <img alt="LinkedIn Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lc2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTQxLDRoLTMyYy0yLjc2LDAgLTUsMi4yNCAtNSw1djMyYzAsMi43NiAyLjI0LDUgNSw1aDMyYzIuNzYsMCA1LC0yLjI0IDUsLTV2LTMyYzAsLTIuNzYgLTIuMjQsLTUgLTUsLTV6TTE3LDIwdjE5aC02di0xOXpNMTEsMTQuNDdjMCwtMS40IDEuMiwtMi40NyAzLC0yLjQ3YzEuOCwwIDIuOTMsMS4wNyAzLDIuNDdjMCwxLjQgLTEuMTIsMi41MyAtMywyLjUzYy0xLjgsMCAtMywtMS4xMyAtMywtMi41M3pNMzksMzloLTZjMCwwIDAsLTkuMjYgMCwtMTBjMCwtMiAtMSwtNCAtMy41LC00LjA0aC0wLjA4Yy0yLjQyLDAgLTMuNDIsMi4wNiAtMy40Miw0LjA0YzAsMC45MSAwLDEwIDAsMTBoLTZ2LTE5aDZ2Mi41NmMwLDAgMS45MywtMi41NiA1LjgxLC0yLjU2YzMuOTcsMCA3LjE5LDIuNzMgNy4xOSw4LjI2eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="/>
              </a>
            </li>
            <li>
              <a href={resume} download="Naomi_A_Resume.pdf">
              <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMTAuNjY2NjcsMTAuNjY2NjcpIj48cGF0aCBkPSJNMTMuMTcyLDJoLTcuMTcyYy0xLjEsMCAtMiwwLjkgLTIsMnYxNmMwLDEuMSAwLjksMiAyLDJoMTJjMS4xLDAgMiwtMC45IDIsLTJ2LTExLjE3MmMwLC0wLjUzIC0wLjIxMSwtMS4wMzkgLTAuNTg2LC0xLjQxNGwtNC44MjgsLTQuODI4Yy0wLjM3NSwtMC4zNzUgLTAuODg0LC0wLjU4NiAtMS40MTQsLTAuNTg2ek0xOC41LDloLTUuNXYtNS41eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="/>
              </a>
            </li>
        </ul>

        <p>This website was created using React.Js, HTML, CSS, and JavaScript by Naomi Anderson.
        Last updated on November 23rd, 2025 at 13:30 EST by Naomi.
        </p>
    </div>
  )
}

export default Footer