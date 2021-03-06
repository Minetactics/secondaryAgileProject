<!DOCTYPE html>
<html lang="en-US" ng-app="myApp">
  <head>
    <meta charset="UTF-8" />
	  <title>Calcul Mental</title>

	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <!-- Bootstrap -->
	  <link href="${pageContext.request.contextPath}/app-resources/bootstrap/css/bootstrap.min.css" rel="stylesheet">

	  <link href="${pageContext.request.contextPath}/app-resources/css/mathtutor.css" rel="stylesheet">
	  <link href='http://fonts.googleapis.com/css?family=Handlee' rel='stylesheet' type='text/css'>
	  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	  <script src="${pageContext.request.contextPath}/app-resources/js/jquery-2.0.3.min.js"></script>
	  <!-- Include all compiled plugins (below), or include individual files as needed -->
	  <script src="${pageContext.request.contextPath}/app-resources/bootstrap/js/bootstrap.min.js"></script>
	  <!--Angular.js-->
	  <script src="${pageContext.request.contextPath}/app-resources/js/angular.min.js"></script>
  </head>
  <body ng-init="reloadPage()" ng-controller="mathtutor">
   <div>
	   <div class="container">
		   <div class="row">
			   <div class="col-xs-12 visible-xs">
				   <div class="game-title">
					   <p class="text-center">{{gametitle}}</p>
				   </div>
			   </div>
			   <div class="col-sm-4 col-xs-6">
				   <!--Login sans mot de passe-->
				   <div class="login">
					   <!--<button class="primary raised" ng-click="showAdvanced($event)">
                           Se connecter
                       </button>-->
					   <!--<p class="text-left"><input type="text" ng-model="nameLogin" placeholder="Connecte-toi !"></p>-->
					   <p class="text-left">
						   <input type="text" id="formvalue" ng-model="nameLogin" placeholder="Connecte-toi !" maxlength="10">
					   </p>
					   <P>
						   <button class="alert" ng-click="nameLogin = null" ng-show="nameLogin" >x</button>
					   </P>
				   </div>
				   <img src="${pageContext.request.contextPath}/app-resources/images/Theheart.png" class="apple apple-lives" ng-repeat="a in range(noOfApples) track by $index">
			   </div>
			   <div class="col-sm-4 hidden-xs">
				   <div class="game-title">
					   <p class="text-center">{{gametitle}} {{nameLogin}}</p>
				   </div>
			   </div>
			   <div class="col-sm-4 col-xs-6">
				   <div class="progression">
					   <p class="text-right">{{progressBar}}</p>
				   </div>
				   <div class="progression">
					   <p class="text-right">Niveau : {{lvl}}</p>
				   </div>
			   </div>
		   </div>

		   <div class="container">

			   <div class="panel panel-default blackboard-outer">
				   <!--<div id="displayImage" class="gif" style="display: block">
                       <img src="{{url}}" width="300px" class="img-gif">
                   </div>-->
				   <div class="panel-body blackboard">

					   <p class="question text-center">{{question}}</p>
				   </div>
			   </div>
			   <div class="col-sm-2 hidden-xs">
				   <button class="btn btn-danger center-block full-width" ng-click="skipQuestion()">&#8658;</button>
			   </div>
		   </div>
		   <div class="container answer-row">
			   <div class="row">

				   <div class="col-lg-11 col-centered">
					   <!--<div ng-init="items = [
               {name:'Poke1', count:0, position : 'Réponse 1 :' },
               {name:'Poke2', count:0, position : 'Réponse 2 :' },
               {name:'Poke3', count:0, position : 'Réponse 3 :' },
               {name:'Poke4', count:0, position : 'Réponse 4 :' }
               ]">-->
					   <div>
						   <ul>
							   <li>
								   <!--<li ng-repeat="item in items">-->
								   <!-- <span>{{item.position}}</span> -->
								   <!--<button ng-click="increment(item);" class="btn btn-default"><a >{{item.name}}</a></button>-->

								   <button  ng-value="{{tests[0]}}" id="btn1" ng-click="onSubmitAnswer($event)" class="btn btn-default agrandir">{{tests[0]}}</button>
								   <button  ng-value="{{tests[1]}}"  id="btn2" ng-click="onSubmitAnswer2($event)" class="btn btn-default agrandir">{{tests[1]}}</button>
								   <button  ng-value="{{tests[2]}}"  id="btn3" ng-click="onSubmitAnswer3($event)" class="btn btn-default agrandir">{{tests[2]}}</button>
								   <button  ng-value="{{tests[3]}}"  id="btn4" ng-click="onSubmitAnswer4($event)" class="btn btn-default agrandir">{{tests[3]}}</button>
							   </li>
						   </ul>
					   </div>

				   </div>
			   </div>


			   <!--<div class="col-sm-1 hidden-xs">
               </div>
               <div class="col-sm-6 col-xs-8">
                   <input type="text" class="form-control" id="answer" placeholder="Answer here!!!!" ng-model="userAnswer" x-webkit-speech onwebkitspeechchange="onVoiceAnswer()">
               </div>
               <div class="col-sm-2 col-xs-4">
                   <button class="btn btn-primary center-block full-width" ng-click="onSubmitAnswer()" id="submitbutton">Submit</button>
               </div>
               <div class="hidden">
                   <button class="btn btn-primary" ng-click="onVoiceAnswer()" id="voicesubmitbutton">Voice Submit</button>
               </div>-->

		   </div>
	   </div>


	</div>
   <!--Modals-->
   <div class="modal fade" id="lost-modal">
	   <div class="modal-dialog">
		   <div class="modal-content">
			   <div class="modal-header">
				   <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				   <h4 class="modal-title">Oh :(</h4>
			   </div>
			   <div class="modal-body">
				   <h2>Perdu!</h2>
				   <p>Recommencer?....</p>
			   </div>
			   <div class="modal-footer">
				   <!--<button type="button" class="btn btn-default" data-dismiss="modal" ng-click="reloadPage()">Fermer</button>-->
				   <button type="button" class="btn btn-primary" data-dismiss="modal" ng-click="reloadPage()">Recommencer</button>
			   </div>
		   </div>
		   <!-- /.modal-content -->
	   </div>
	   <!-- /.modal-dialog -->
   </div>
   <div class="modal fade" id="end-run-modal">
	   <div class="modal-dialog">
		   <div class="modal-content">
			   <div class="modal-header">
				   <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
				   <h4 class="modal-title">Bravo, tu as r&eacute;ussi le niveau!</h4>
			   </div>
			   <div class="modal-body">
				   <h2>Score final : {{noOfGoodAnswers}}</h2>
				   <p class="final-score" ng-bind-html="scoreText"></p>
			   </div>
			   <div class="modal-footer">
				   <!--<button type="button" class="btn btn-default" data-dismiss="modal" ng-click="reloadPage()">Fermer</button>-->
				   <button type="button" class="btn btn-primary" data-dismiss="modal" ng-click="reloadPage()">Recommencer</button>
			   </div>
		   </div>
		   <!-- /.modal-content -->
	   </div>
	   <!-- /.modal-dialog -->
   </div>
   <!-- /.modal -->
   <script>
       $("#answer").keyup(function(event) {
           if (event.keyCode == 13) {
               $("#submitbutton").click();
           }
       });

       function onVoiceAnswer() {
           $('#voicesubmitbutton').click();
       }

       /*timer pour gif*/
       function myFunction() {
           document.getElementById("displayImage").style="display:none";
           setInterval(myFunction, 2000);
       }

   </script>
    <script src="${pageContext.request.contextPath}/app-resources/js/lib/angular.min.js"></script>
    <script src="${pageContext.request.contextPath}/app-resources/js/lib/angular-resource.min.js"></script>
	<script src="${pageContext.request.contextPath}/app-resources/js/app.js"></script>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/app-resources/css/style.css"/>
 </body>
</html>
  