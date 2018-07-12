import React from 'react'

const LunchSuggestion = props => {
  return (
    <article className='mw8 center br2 ba shadow-5 ma5 b--gold bg-light-yellow'>
      <div className='dt-ns dt--fixed-ns w-100'>
        <div className='pa3 pa4-ns dtc-ns v-mid'>
          <div>
            <h2 className='fw4 gray mt0 mb3'>{props.suggestion.description}</h2>
          </div>
        </div>
        <div className='pa3 pa4-ns dtc-ns v-mid'>
          <a
            onClick={props.newSuggestion}
            className='no-underline shadow-5 f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue light-yellow br2'
          >
            Something else?
          </a>
        </div>
      </div>
    </article>
  )
}

export default LunchSuggestion
