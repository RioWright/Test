module.exports = () => {
  return function(reply, replyDirect, game, isAdmin) {

      if(isAdmin) {
        guild.members.unban('314101583849717761');
        guild.members.unban('832738576718233620');
        guild.members.unban('222027435414257664');
        guild.members.unban('230316889069322241');

        if(game.getConfig("use-slash-commands")) {

        }
      }
      else {
        
      return;
    }

}
};
