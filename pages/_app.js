import React from 'react'
import App from 'next/app'
import '../css/styles.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        `}
        </style>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default MyApp