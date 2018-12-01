import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import Typography from '@material-ui/core/Typography'
import { ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';


const Expansion = (props) => {
  const { imgSrc, game, imgAlt, openPanel, panel, title, handleChange } = props
  return(
    <div class='expansion-item'>
      <ExpansionPanel expanded={openPanel === panel} onChange={handleChange(panel)}>
        <ExpansionPanelSummary>
          <Typography>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <img class="game-icon" src={imgSrc} alt={imgAlt}/>
          <Typography>{game}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default Expansion