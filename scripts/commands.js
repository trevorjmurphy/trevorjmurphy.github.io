function parseCommand(text) {
  text = text.toLowerCase();
  switch (text) {
    case "help":
      helpScene();
      break;
    case "about_me":
      aboutScene();
      break;
    case "education":
      educationScene();
      break;
    case "employment":
      employmentScene();
      break;
    case "projects":
      projectsScene();
      break;
    case "skills":
      skillsScene();
      break;
    case "resume":
      resumeScene();
      break;
    case "credits":
      creditsScene();
      break;
    case "clear":
      $("#console").text("");
      break;
    default:
      IOPrint("Command not recognized. Type HELP for commands.", "orange");
  }
}

function helpScene(){
  IOHTML("<table class='table col-md-12 table-bordered'><tr class='col-md-12'><td>about_me</td><td>education</td><td>employment</td></tr><tr><td>projects</td><td>skills</td><td>resume</td></tr></table>");
}

function aboutScene() {
  IOHTML(`<div class="container col-md-12 row"><div class="col-md-3"><code><span style="display:block;line-height:4px; font-size: 4px; font-weight:bold;white-space:pre;font-family: monospace;color: white; background: black;">################################################################(.             ,.    .(########################################################%%%%%%%%&&&&&&&@
###########################################################    ///////////////. ///////   (##################################################%%%%%%%&&&&&&&&@@@
#########################################################   ///////////////////////////////  .#############################################%%%%%%%%&&&&&&&@@@@@
##################################################(     .////////(//*//////////////////////////.   /#####################################%%%%%%%%&&&&&&&@@@@@@@
###############################################.  *////////////////////////////////////////////*////  #################################%%%%%%%%&&&&&&&&@@@@@@@@
########################################*      .,,,.  //////////////////////////////////////////,   /  ##############################%%%%%%%%&&&&&&&&@@@@@@@@@@
####################################   ./////////////////////////////////////////////////////////////*  ###########################%%%%%%%%&&&&&&&&@@@@@@@@@@@@
#################################  .///////////////////////////////////////////////// /// (// //////*/( .########################%%%%%%%%&&&&&&&&@@@@@@@@@@@@@@
###############################,  /,.//////////////////////////////,          //, ////  //. // //,////   #######################%%%%%%%%&&&&&&&&@@@@@@@@@@@@@@@
##############################   //////////////////////////////////////////////*    ///* ///   #&././/  (###################%%%%%%%%&&&&&&&&@@@@@@@@@@@@@@@&&
############################  */////////////////////////////////////.          ,///  ////(%&&& &&%&&&&////  , *############%%%%%%%%%&&&&&&&&@@@@@@@@@@@@@&&&&&&
##########################( ,////////////////////////////////////////////////// ,,&&&&&&&&&&&&&&&&&&&&&&&&&     ##########%%%%%%%%&&&&&&&&&@@@@@@@@@@&&&&&&&&&&
#########################%%%////*//////////////////////////////////(*....,/////, &&&&&&&&&&&&&&&&&&&&&&&&&&&  /* ,######%%%%%%%%&&&&&&&&&&&@@@@@@&&&&&&&&&&&&&%
##################%%%%%%%%%%  //.  //////////////////////////////////////(&%/.   &&&&&&&&&&&&&&&&&&&&&&&&&&&&  // (###%%%%%%%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&%%%%%
############%%%%%%%%%%%%%%%%  ///////////////(///////////////////.  ./%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&**/ *#%%%%%%%%%&&&&&&&&&&&&&&&&&&&&&&&&&%%%%%%%%%
######%%%%%%%%%%%%%%%%%%%%%, *//          .////////////////////* .&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  #%%%%%%%%&&&&&&&&&&&&&&&&&&&&&&&&%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%  ////   /(///////////////////////%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&. %%%%%%%&&&&&&&&&&&&&&&&&&&&%%%%%%%%%%%%%####
%%%%%%%%%%%%&&&&&&&&&&&&&&&%///////, .///*  ./////////////  %&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&/ %%%%&&&&&&&&&&&&&&&&&&&%%%%%%%%%%%%########
%%%%%%&&&&&&&&&&&&&&&&&&&, /////////, //////////////////  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  %%&&&&&&&&&&&&&&&&%%%%%%%%%%%%%###########
&&&&&&&&&&&&&&&&&&&&&&&&* ///////////  ,///////////.    &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&. /&&%%&&&&&&&&&&&&%%%%%%%%%%%%%%###############
&&&&&&&&&&&&&&&&&&&&&&&& *//////////////*.      .*/// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.  .&&&&&&  %%&&&&&&&%%%%%%%%%%%%%%%###################
&&&&&&&&@&@&&&&&&&&&&&&. ///////////////////////////  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&(         .%%%%%%%%%%%%%%%%%%#######################
@@@@@@@@@@@@&&&&&&&&&&%  //////////////////////////(  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&               %%%%%%%%%%%%%%%##########################
@@@@@@@@@@@&&&&&&&&&%%%  //////////////////////////,  &&&&&&&&&&&&&&&&&&&*      /%&&&%,  (&&&&&&&&&&&&      &&&&&&    %%%%%%%%%%%##############################
@@@@@@@@@@&&&&&&&&&%%%%  //////////////////////////  /&&&&&&&&&&&&&&*   *&&&&&&&&&&&%#(/,  %&&&&&&&&*     &&&&&&&&/  .%%%%%%%##################################
@@@@@@@@&&&&&&&&&%%%%%%  //////////////////////////  &&&&&&&&&&&&&  (&&&&&&&&&(                &&        /&&&&&& &&   %%%######################################
@@@@@@&&&&&&&&%%%%%%%%%* (/////////////////////////  &&&&&&&&&&&  &&.              ,##*                 &&&*   ,&(  /########################################
@@@@@&&&&&&&%%%%%%%%%### .///////////////////////// %&&&&&&&&&&  %             ,&&&&&&&&&&&&*             &(     #&&   ########################################
@@&&&&&&&&%%%%%%%%%#####. ///////////////(//////(//##(/*/(#%&&.          %&&&&&&&&& &&&&.    &&&       &&&&&   ########################################
&&&&&&&&%%%%%%%%%######## ./////////,                                  &&&&&&&&&&&,...  ,&&     /&&&&&      &&&&&%     ########################################
&&&&&&%%%%%%%%%##########. ///////. &&&&&   ...                     &&&&&&&(          &&.     &&&&&&&(              (########################################
&&&&%%%%%%%%##############  /////  &   *&&&&/  ////, &&&&&&&&&(       &&&&&(%&&       *&&&&     &&&&&&&&&       &&&&&( ########################################
&&%%%%%%%%%################ .///. &, &&&( .&& ,///  &&&&&&&&&&&      &&&&&&&&&&&&&&&&&&&&&    #&&&&&&&&&  &&&&&&&&&&% (######################################
%%%%%%%%#################### ,//  & (&&&&&  &&&  /.*&&&&&&&&&&&&     &&&&&&&&&&&&&&&&&&&,     #&&&&&&&&&& /&&&&&&&&&&/ (#####################################
%%%%%%######################/ *// %&  &&&*  *&&&*  &&&&&&&&&&&&&&     &&&&&&&&&&&&%          &&&&&&&&&&&&% .&&&&&&&&&&  #####################################
%%%%#########################* //,  &&//&&&&,  %&&&&&&&&&&&&&&&&&&&&    ,&&&.            (&&&&&&&&&&&&&&&&/    *&&&& .#####################################
%%############################* ,//   %&&&&&%   &&&&&&&&&&&&&&&&&&&&&                  #&&&&&&&&&&&&&&&&&&&&&&&&. #&&&&  ######################################
###############################. .///     &&&&%&&&&&&&&&&&&&&&&&&&&&&&        .(&&&&&&&&&&&&&* %&&&&&&&&&&&&&&&. & *&&  #######################################
################################  //////.   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& #&&&&&&&&&&&&&&&& #&& * ,########################################
#################################  ///////   &&&&&  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& &&&&&&&&&&&&&&,   &&&. (#########################################
##################################  ////////       &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   (&&&&.  &&,      ,(&&&&  &/ (##########################################
###################################  //////////////&#&&&&&&&&&&&&&&&&&&&&&&&&&&&*  &&&&&&&&&&&&&&&&&&&&&&&&&  %( /###########################################
####################################. .//////////// && &&&&&&&&&&&&&&&&&&&&&&&&&% ,&&&&&&&&&&&&&&&&&&&,&&&&&  .&& .############################################
######################################   ////////// ,&  &&&&&&&&&&&&&&&&&&&&&&&  &&&&&&&&&&&&&&&&&&&&&&   &&&&  #############################################
########################################   ////////. &&  &&&&&&&&&&&&&&&&&&& &&&&&  &&&&&&&&&&&%(     #&&&&& (#############################################
##########################################   //////( (&&  &&&&&&&&&&&&&&&&&&& #&&&&,           ./%&&&&&&&&&&&&&  ##############################################
###########################################   //////  &&&  #&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  %&&&&&&  ###############################################
#############################################   ////  &&&&&  #&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  ################################################
###############################################.  *. &&&&&&&&  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  #################################################
##################################################   &&&&&&&&&%  %&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&(  ##################################################
###################################################  #&&&&&&&&&&&   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  (###################################################
####################################################  &&&&&&&&&&&&&.   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  /#####################################################
####################################################( ,&&&&&&&&&&&&&&&.   ,&&&&&&&&&&&&&&&&&&&&&&&&&,  /#######################################################
#####################################################, &&&&&&&&&&&&&&&&&&&*        ./%&&&&&&&.   ,###########################################################
######################################################  &&&&&&&&&&&&&&&&&&&&&&&&&(              ###############################################################
######################################################. %&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  ###############################################################
######################################################( .&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&* (##############################################################
#######################################################  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  ##############################################################
######################################################( ,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  ####################//,,.         .(##########################
######################################################. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& /#########/       ,(#%%%%%%%%%%%%%%(   #######################
#####################################################,  #&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%  ..    .(%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  #####################
##################################################/  .//  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  */, %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% .###################
###############################################*  #%( //// (&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  //. %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%. (#################
###########################################,   %%%%%%%  ///, ,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%  //  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  ################
######################################(   .%%%%%%%%%%%%% *///*  /&&&&&&&&&&&&&&&&&&&&&&&&&&   /// *%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  ##############
##################################/   .%%%%%%%%%%%%%%%%%%, /////.    *%&&&&&&&&&&&&&&&&.   ////  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#  ############
#############################(    %%%%%%%%%%%%%%%%%%%%%%%%%*  ////////*.              ./////  ,%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  ##########
#########################    #%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#   .*///////////////////*   *%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%, ,#######
###################/    /%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%(.             ./%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  #####
############,    .#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  ##
########   *%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#
######, ,%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
#####. #%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
####( /%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
####  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
###, %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
### *%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
##  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%# %%%%%%%%%%%%%%%%%%%%%%%%
#. %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%(                 %%%%%%%%%%%%%%%%%%%%%%%%%# %%%%%%%%%%%%%%%%%%%%%%%%
</span></code></div>
  <div class="col-md-9"><h4 style="color: cyan">Heya, I'm Trevor!</h4><hr>
  <p style="color: GoldenRod">Welcome to my site! I am a software developer, working on many great projects! I have a passion for programming and IT, and I love to make and break things!<br/><br/>I am the co-founder of <a href="https://burgundylabs.com" target="_blank" style="color:red">Burgundy Labs</a>, a software development company based out of Houghton, MI, that creates solutions to problems in the education technology world. Currently, our main project is <a href="https://github.com/Burgundy-Labs/TimeSlot" target="_blank">TimeSlot</a>!<br/><br/>Feel free to click the icons on the top of the page to find me on Github and other social media!</p></div></div>`);
}

function educationScene() {
  IOHTML(`<div class="col-md-12 container"><h5 class="hyperlink"><a target="_blank" href="http://dhs.dewittschools.net/">Dewitt High School</a></h5><br/><div class='col-md-12 row'><div class='col-md-3'><code><span style="display:block;line-height:4px; font-size: 4px; font-weight:bold;white-space:pre;font-family: monospace;color:white">                                                                                                  %#,,,,,,*%&
                                                                        *.                                        ,#%
                                                                      .                                                  *
                                                                    #                                                       .#
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                                .......                      #%%%%%%%%%%%%%%%%
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%        *%@@@@@@&(//*///(#%&@@@@@@@@@@@@&%#*,                 #%%%%%%%%%%%%%
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*          #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%(,               &%%%%%%%%%%
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*             /&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%*.            #%%%%%%%%
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*            ./%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#*            *%%%%%%
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#            .(&@@@@@@@@@@@@@@#,.     ./&@@@@@@@@@@@@@@@@@@@@@@@@@@@@#*            *%%%
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*           ./&@@@@@@@@@@&%%%&@@@%.       ,&@@@@@@@@@@@@@@@@@@@@@@%&@@@@@&/              *
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*           *&@@@@@@@@@%(*      .&@@@&/.   ,#@@@@@@@@@@@@@@@@@@@@@@&. %@@@@@@&(,              #
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*          ,(@@@@@@@@@%*         ,/&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*    *@@@@@@@@,             *
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*          .#@@@@@@@@@(,        ,(&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/,.   .&@@@@@@@@@@&(.            #
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#          .#@@@@@@@@%,        ,%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#*
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%.         .#@@@@@@@&/.       ,%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(.
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%          ,#@@@@@@@&,       .(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*        .
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*         .(@@@@@@@#,       *&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(.
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%#          *@@@@@@@#,      .(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#(#%&@@@@@@@@@@@@@@@@@@@@@@@@@&*       .
             %%%%%%%%%%%%%%%%%%%%%%%%%%%%.         ,#@@@@@@@(      .#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,    .,#&@@@@@@@@@@@@@@@@@@@@@&/       .
             %%%%%%%%%%%%%%%%%%%%%%%%%%#         ./@@@@@@@%.     .#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*        #@@@@@@@@@@@@@@@@@@@@%,
             %%%%%%%%%%%%%%%%%%%%%%%%%*         ,&@@@@@@&/     *%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&.        .(@@@@@@@@@@@@@@@@@@%,
             %%%%%%%%%%%%%%%%%%%%%%%%         ,#@@@@@@@%.    /%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%#(*   ,%@@@@@@@@@@@@@@@@&.
             %%%%%%%%%%%%%%%%%%%%%%#         *@@@@@@@@/    *%@@@@@@@@@@@@@@@@@@@(  .(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%**%@@@@@@@@@@@@@@@&*
             %%%%%%%%%%%%%%%%%%%%%*         (@@@@@@@@#   .(@@@@@@@@@@@@@@@@@@@@%.   .#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/
             %%%%%%%%%%%%%%%%%%%%#        .(@@@@@@@%*  .#@@@@@@@@@@@@@@@@@@@@@@#.    *@@@@&,.#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%
             %%%%%%%%%%%%%%%*            *&@@@@@@@&.  (@@@@@@@@@@@@@@@@@@@@@@@@#.    .&@@&/  *&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*       .
             %%%%%%%%%%%%%*             *@@@@@@@@%,.(&@@@@@@@@@@@@@@@@@@@@@@@@@%,    .%@@@/  (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*.  .(&@@@@@&*
             %%%%%%%%%%%*              /&@@@@@@@%.*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(     (@@@@/*&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#.       ,@@@@@,
             %%%%%%%%%%*              .&@@@@@@@&/#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%     *&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#         .&@@@(
             %%%%%%%%#         ,(,   ,%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(     /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/          .&@@/
             %%%%%%%.         (@(.  ,%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(     %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#           (@&*
             %%%%%%         ,&@%,   %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(.   ,%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#.          (%*
             %%%%#         (&@@,   /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*   ,%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(
             %%%#        .(@@@(   /&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#,  /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%, .*                 %
             %%#        ,#@@@%,   %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/,(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&@#.               %%
             %.        .&@@@@,   /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%,   ,#/       .%%%
             *        *&@@@@(   *&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@#.       %%%%
            #        ,&@@@@#.  ,%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#.        %%%%
           #        *&@@@@&,   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&.        %%%%%
                   ,%@@@@@#   .&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&/         %%%%%
          .        %@@@@@%,   /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(*...*(%@@@@@@@@@@@@@@@@&,         %%%%%%
         ,       .(@@@@@&*   ,%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(.        ./&@@@@@@@@@@@@%,         %%%%%%%
                 (@@@@@@(    (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&,            ,#@@@@@@@@@/         %%%%%%%%%
        .       .&@@@@@&.   .&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&.              .(@@@@@%*         %%%%%%%%%%
       #        /@@@@@@%    *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,                ,#&.         %%%%%%%%%%%
               *&@@@@@&*   .(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%/#@@@@@@@@@@/                              %%%%%%%%%%%%
              .#@@@@@@(    *&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#  *&@@@@@@@@%,                           %%%%%%%%%%%%%%
      ,       /@@@@@@@*    (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%   ,&@@@@@@@@#        *%%              %%%%%%%%%%%%%%%%
              %@@@@@@%     %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*   ,%@@@@@@@@,        #%%%%        %%%%%%%%%%%%%%%%%%%
     ,       ,@@@@@@@#    .&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%,   ,#@@@@@@@%,        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
             /@@@@@@&/    ,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@@@#    ,&@@@@@@@#.       .%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            .#@@@@@@&,    /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#.  /&@@@@@@@@/    *&@@@@@@@#         %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    ,       *&@@@@@@%.   .#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#.    ,%@@@@@@@(    ,&@@@@@@@/         %%%%%%%%%%%%%%%%%%%%%%%%%%%%
            /@@@@@@@(.   ,%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*      ,&@@@@@@*    ,#@@@@@@@(         %%%%%%%%%%%%%%%%%%%%%%%%%%%
            #@@@@@@@(    *&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%       ./&@@@@&/     *@@@@@@@/         %%%%%%%%%%%%%%%%%%%%%%%%%%
            %@@@@@@&/    /&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*        *@@@@@@(     /&@@@@@@(.        #%%%%%%%%%%%%%%%%%%%%%%%%
   .       .&@@@@@@&*    (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&/        /&@@@@@(.    .%@@@@@@%.         %%%%%%%%%%%%%%%%%%%%%%%
   ,       ,@@@@@@@&*   .#@@@@@@@@@@@@@@@@@@&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*        *@@@@@@&.    ./&@@@@@%*         #%%%%%%%%%%%%%%%%%%%%%
           /@@@@@@@&*   .#@@@@@@@@@@@@@@@@@@* *&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(.       %@@@@@@@(.    .&@@@@@@/         *%%%%%%%%%%%%%%%%%%%%
           (@@@@@@@&*   ,%@@@@@@@@@@@@@@@@@@,  .(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&,      *&@@@@@@@&*    ./@@@@@@%*         *%%%%%%%%%%%%%%%%%%
  #       .#@@@@@@@&*   ,%@@@@@@@@@@@@@@@@@@*    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&(     .#@@@@@@@@@#     (&@@@@@@*          %%%%%%%%%%%%%%%%%
  .       .%@@@@@@@&*   ,%@@@@@@@@@@@@@@@@@@(     /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%/.   (@@@@@@@@@@&(.   ,#@@@@@@%.         *%%%%%%%%%%%%%%%
  .       *&@@@@@@@@/   ,%@@@@@@@@@@@@@@@@@@&*     *%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(,.#@@@@@@@@@@@@@/.   (&@@@@@@(.         #%%%%%%%%%%%%%
  ,       *&@@@@@@@@(   ,%@@@@@@@@@@@@@@@@@@@%      .(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(.  ,&@@@@@@@*          *%%%%%%%%%%%
          /@@@@@@@@@(   ,%@@@@@@@@@@@@@@@@@@@@/       /&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%, .(@@@@@@@&,          #%%%%%%%%%
          (@@@@@@@@@#.  .#@@@@@@%,#@@@@@@@@@@@&/       .%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/.,&@@@@@@@%.          #%%%%%%%
          (@@@@@@@@@%,  .#@@@@@@( ,%@@@@@@@@@@@&*       .#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(&@@@@@@@&/           %%%%%%
          (@@@@@@@@@%,  .#@@@@@&/  *@@@@@@@@@@@@&.        ,&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*          *%%%%
          (@@@@@@@@@&*   /@@@@@&/   %@@@@@@@@@@@@%,         /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&,          *%%
          (@@@@@@@@@@(   *&@@@@@#.  ,%@@@@@@@@@@@@%.         ,#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*          .,,,*%
          (@@@@@@@@@@#   ,%@@@@@%,   *&@@@@@@@@@@@@%,          /&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*                 *
          (@@@@@@@@@@%   .#@@@@@&*   .(@@@@@@@@@@@@@%*          ,%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(.                 #
 #        /&@@@@@@@@@&.   /@@@@@@#    ,&@@@@@@@@@@@@@@,           (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%.
          .*****,,,,,,    .,,,,,,.     .,,,,,,,,,,,,...            ..........................................................................                *





</span></code></div><div class='col-md-9'><p>Dewitt, Michigan<br>Class of 2016<br/><br/><p class="notable">Primary Study:</p>&nbsp;&nbsp;&nbsp;Technology<br/><br/><p class="notable">Notable Classes:</p>&nbsp;&nbsp;&nbsp;Research and Development Lab<br/>&nbsp;&nbsp;&nbsp;Web Development<br/>&nbsp;&nbsp;&nbsp;App Development</p></div></div><br/><br/><div class="col-md-12" style="text-align: right"><h5 class="hyperlink"><a target="_blank" href="https://www.mtu.edu/">Michigan Technological University</a></h5><div class='col-md-12 row'><div class='col-md-9'><p>Houghton, Michigan<br/>Studied for 2.5 Years (2016 - 2018)<br/><br/><p class="notable">Major:</p>Computer Science<br/><br/><p class="notable">Notable Classes:</p>Data Structures<br/>Concurrent Programming<br/>Discrete Structures<br/>Databases</p></div><div class='col-md-3'><code><span class="col-md-12" style="display:block;line-height:7px; font-align: left; font-size: 7px; font-weight:bold;white-space:normal;font-family: monospace;color: white;">












                                 ,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
                                 ,&&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*,%%,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*/#&%,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(&&&&&&,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*&&&&&&&&&&&%,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,%&&&&&&&&&&&&%/,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,%&&&&&&&&&&&&&&&&&/,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*&&&&&&&&&&&&&&&&&&&&&&/,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,&&&&&&&&&&&&&&&&&&&&&&,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*#&&&&&&&&&&&&&&&&&&&%*/((,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*%&&&&&&&&&&&&&&&&&&&&&&&*,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(&&&&&&&&&&&&&&&&&&&&&&&&&&%,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,**#%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&/,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,/#&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%/,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,*#&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,(&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,(&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&/,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%*,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&/,,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&,,,,,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,(&&&/(&&&&&&&&&&&&%/**/#&&&&&&&&&&&&&&&&&/*%&/,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,#&&&&&%,(&&&&&&&&&&%,,,,,,,,,,,,,,,,%&&&&&&*#&&(,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,/&&&&&&&&,,,*&&&&&&&,,,,,,,,,,,,,,,,,/&&&&&%,&&&(,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,#&&&&&&&&/,,,,#&&&&&&%*,,,,,,,,,,,,,,,,,,,%&&&,&&,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,&&&&&&(,,,,,,,,,,,,,,,,,,,,,,/&&&*&&&&,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,#&&&&&*,,,,,,,,,,,,,,,,,,,,,,,,,&&&&(,&&&&,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,*&&&,,,,,,,,,,,,,,,,,,,,,,,,,,(&&&(,(&&&/,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,/(&&,,,,,,,,,,,,,,,,,,,,,,,,,,,%&&%*,(&&%#%&&&&&/*,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,#*&&&%,,,,,,,,,,,,,,,,,,,,,,,,,,,(&&&&&&&&&&&&&&&&&&&&&&(*,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,%*%&&%,,,,,,,,,,,,,,,,,,,,,,,,/(&&&&&&&&&&&&&&&&&&&&&&&&&&&%,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,*%*#&&&&&%(,*#%&&&&&&%%%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/&
                                 ,&&&,,,,,,,,,,,,,,,,,%%/&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
                                 ,&&&,,,,,,,,,,,*/#&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
                                 ,&&&*(%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
                                 ,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
                                 ,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,**/*,,,,,,,,,,,,*/(##(/*,,,,,,,,,,,,/(##((*,,,,,,,,,,,,////////,,,,,,,,/&
                                 ,&&&,,,,,,,,,,(%#&,,,,,,,,,,,*&&/***&&*,,,,,,,,,,#&%***#&%,,,,,,,,,,/&%***/&%,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,%,,,,,,,,,,,*&&,,,,&&*,,,,,,,,,,%,,,/&%,,,,,,,,,,/&%,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,%,,,,,,,,,,,,#&&&&&&%,,,,,,,,,,,*&&&&&&%/,,,,,,,,,,/&&%%&&&%,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,%,,,,,,,,,,,/&%,,,,%&(,,,,,,,,,*&&*,,,*&&,,,,,,,,,,,,,,,,*&&/,,,,,,,/&
                                 ,&&&,,,,,,,,*/(%&%//,,,,,,,,,/&&(///&&(,,,,,,,,,*&&%///#&&,,,,,,,,,,#&&(//#&&*,,,,,,,/&
                                 ,&&&,,,,,,,,,*******,,,,,,,,,,,*////*,,,,,,,,,,,,,**////*,,,,,,,,,,,,,*////*,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,/&
                                 ,&&&*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(&
                                 ,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
                                  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.











</span></code></div></div></div></div>`);
}

function employmentScene() {
  IOHTML(`<div class="col-md-12">
  <h4><a href="https://burgundylabs.com" target="_blank" style="color: red">Burgundy Labs | Co-Founder</a></h4>
  <h6 style="color: yellow">October 2017 - Current</h6>
  <div class="col-md-12 row"><div class="col-md-6"><p><span class="special">&#9671;</span>  Develops the UI/UX using Bootstrap, jQuery, and a custom, in-house Bootstrap/Java framework</p></div>
  <div class="col-md-6"><p><span class="special">&#9671;</span>  Develops the server using Java and the Play framework</p></div>
  <div class="col-md-6"><p><span class="special">&#9671;</span>  Manages developers on project goals and issues</p></div>
  <div class="col-md-6"><p><span class="special">&#9671;</span>  Troubleshoots bugs and deployments of servers and databases (Google Firestore/Docker)</p></div></div>

  <br/><h4><a href="https://github.com/MTUHIDE/CoCoTemp" target="_blank" style="color: cyan">CoCoTemp | Front-end Developer</a></h4>
  <h6 style="color: yellow">August 2017 - October 2017</h6>
  <div class="col-md-12 row"><div class="col-md-3"><p><span class="special">&#9671;</span>  Filler</p></div>
  <div class="col-md-9"><p><span class="special">&#9671;</span>  Filler</p></div>
  <div class="col-md-3"><p><span class="special">&#9671;</span>  Filler</p></div>
  <div class="col-md-9"><p><span class="special">&#9671;</span>  Filler</p></div></div>

  <br/><h4><a style="color: purple" href="https://www.theislandhouse.com/" target="_blank">Island House Hotel | Dock Porter</a></h4>
  <h6 style="color: yellow">April 2017 - August 2017 && April 2018 - August 2018</h6>
  <div class="col-md-12 row"><div class="col-md-3"><p><span class="special">&#9671;</span>  Filler</p></div>
  <div class="col-md-9"><p><span class="special">&#9671;</span>  Filler</p></div>
  <div class="col-md-3"><p><span class="special">&#9671;</span>  Filler</p></div>
  <div class="col-md-9"><p><span class="special">&#9671;</span>  Filler</p></div></div>
  </div>`);
}

function projectsScene() {
  IOHTML(`<table class="table col-md-12 table-bordered"><tr class="col-md-12 row"><th class="col-md-6">Timeslot</th><th class="col-md-6">Medium Feed</th></tr></table>`);
}

function skillsScene() {
  IOHTML("<table class='table col-md-12 table-bordered'><tr class='col-md-12'><td>Java: <i class='icon star'></i><i class='icon star'></i><i class='icon star'></i><i class='icon star'></i><i class='icon star is-empty'></i></td><td>education</td><td>employment</td></tr><tr><td>projects</td><td>skills</td><td>resume</td></tr></table>");
}

function creditsScene() {
}

function resumeScene() {
  IOHTML("<h3><a class='hyperlink' target='_blank' href='https://docs.google.com/document/d/1NhcgWHDtpD73xH22_MTmXp9c2-JsNKNcFveZSIFZAYY/edit?usp=sharing'>Trevor Murphy's Resume | 284 KBs</a></h3>");
}
