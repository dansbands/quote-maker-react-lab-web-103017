import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import * as actions from '../actions/quotes';

class Quotes extends Component {

  render() {
    console.log('Quotes Props', this.props);
    let sortedQuotes = this.props.quotes.sort((a,b) => a.votes < b.votes)
    let quotes = sortedQuotes.map(q => {
      console.log('Quotes Map', q);

      return (
        <QuoteCard
          key={q.id}
          quote={q}
          handleRemove={() => this.props.removeQuote(q.id)}
          handleUpvote={() => this.props.upvoteQuote(q.id)}
          handleDownvote={() => this.props.downvoteQuote(q.id)}
           />
      )
    })
    console.log('Quotes', quotes);

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
}

export default connect(mapStateToProps, actions)(Quotes);

// {/*
//   TODO:
//
//   Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
//  */}
