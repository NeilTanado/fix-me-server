const data = require('../data.json');

module.exports = {
  postWords:(req, res)=>{
    let wordBody = req.body.word;
    let checkWord = data.words.filter( word => {
      return word = wordBody
    });
    if ( checkWord ) {
      res.status( 200 )
        .json( true );
    } else {
      res.status( 400 )
        .json( false );
    }
  }

};
