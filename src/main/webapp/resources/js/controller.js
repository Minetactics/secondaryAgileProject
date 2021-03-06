var app = angular.module('myApp', ['ngResource']);

app.factory('Person', ['$resource', function ($resource) {
    return $resource('http://localhost:8080/info/person/:personId', {personId: '@pid'},
        {
            updatePerson: {method: 'PUT'}
        }
    );
}]);

/*app.controller('personcontroller', ['$scope', 'Person', function($scope, Person) {
    var ob = this;
    ob.persons = [];
    ob.person = new Person();
    ob.fetchAllPersons = function () {
        ob.persons = Person.query();
    };
    ob.fetchAllPersons();
    ob.addPerson = function () {
        console.log('Inside save');
        if ($scope.personForm.$valid) {
            ob.person.$save(function (person) {
                    console.log(person);
                    ob.flag = 'created';
                    ob.reset();
                    ob.fetchAllPersons();
                },
                function (err) {
                    console.log(err.status);
                    ob.flag = 'failed';
                }
            );
        }
    };
    ob.editPerson = function (id) {
        console.log('Inside edit');
        ob.person = Person.get({personId: id}, function () {
            ob.flag = 'edit';
        });
    };
    ob.updatePersonDetail = function () {
        console.log('Inside update');
        if ($scope.personForm.$valid) {
            ob.person.$updatePerson(function (person) {
                console.log(person);
                ob.updatedId = person.pid;
                ob.reset();
                ob.flag = 'updated';
                ob.fetchAllPersons();
            });
        }
    };
    ob.deletePerson = function (id) {
        console.log('Inside delete');
        ob.person = Person.delete({personId: id}, function () {
            ob.reset();
            ob.flag = 'deleted';
            ob.fetchAllPersons();
        });
    };
    ob.reset = function () {
        ob.person = new Person();
        $scope.personForm.$setPristine();
    };
    ob.cancelUpdate = function (id) {
        ob.person = new Person();
        ob.flag = '';
        ob.fetchAllPersons();
    };

}]);
*/
app.controller('mathtutor', [function mathtutor($scope) {
    $scope.gametitle = "Bienvenue";
    $scope.compteurProgressBar = 0;

    $scope.n1 = 0;
    $scope.n2 = 0;
    $scope.lvl = 0;
    $scope.userID = null;


    //TODO: fonction pour se connecter AJAX pour communiquer avec UtilisateurController sur un GET
    function getConnectedUser() {

        //recup val bouton
        /*var xml = ( window.XMLHttpRequest ) ?
        new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

        xml.open("GET", user/myName, true);
        xml.setRequestHeader("Content-type", "application/json");

        xml.onreadystatechange = function()
        {
            if( xml.readyState === 4 &&
                xml.status     === 200 )
            {
                var serverResponse = JSON.parse(xml.responseText);
                switch(serverResponse.d)
                {
                    //GET user id et stocker sous forme userID =
                }
            }
        }
        xml.send(null);
        */
    }

    //TODO: fonction pour récupérer
    $scope.reloadPage = function () {
        $scope.numberOfQuestions = 0;
        $scope.noOfApples = 3;
        $scope.noOfGoodAnswers = 0;
        $scope.getNewQuestion();
        getConnectedUser();
        //$scope.myFunction();
        //TODO: appeler la fonction de connection si non connecté
    }

    $scope.getRandomIndex = function (length) {
        return Math.floor(Math.random() * length);
    }


    // -> Fisher–Yates shuffle algorithm
    var shuffleArray = function (array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }

    $scope.getNewQuestion = function () {

        $scope.variable1 = 0;
        $scope.variable2 = 0;
        $scope.variable3 = 0;

        if ($scope.lvl == 0) {
            $scope.minNumber = 1;
            $scope.maxNumber = 10;
            /*$scope.answer = 11;*/
            while ($scope.answer > 10
            || $scope.variable1 == $scope.variable2
            || $scope.variable1 == $scope.variable3
            || $scope.variable2 == $scope.variable3
            || $scope.answer == $scope.variable1
            || $scope.answer == $scope.variable2
            || $scope.answer == $scope.variable3) {
                $scope.n1 = Math.floor(Math.random() * $scope.maxNumber) + 1;
                $scope.n2 = Math.floor(Math.random() * $scope.maxNumber);
                $scope.question = $scope.n1 + " + " + $scope.n2;
                $scope.variable1 = Math.floor(Math.random() * ($scope.maxNumber - $scope.minNumber + 1) + $scope.minNumber);
                $scope.variable2 = Math.floor(Math.random() * ($scope.maxNumber - $scope.minNumber + 1) + $scope.minNumber);
                $scope.variable3 = Math.floor(Math.random() * ($scope.maxNumber - $scope.minNumber + 1) + $scope.minNumber);
                $scope.answer = $scope.n1 + $scope.n2;
            }
        } else if ($scope.lvl == 1) {
            $scope.minNumber = 1;
            $scope.maxNumber = 20;
            /*$scope.answer = 21;*/
            while ($scope.answer > 20
            || $scope.variable1 == $scope.variable2
            || $scope.variable1 == $scope.variable3
            || $scope.variable2 == $scope.variable3
            || $scope.answer == $scope.variable1
            || $scope.answer == $scope.variable2
            || $scope.answer == $scope.variable3) {
                $scope.n1 = Math.floor(Math.random() * $scope.maxNumber) + 1;
                $scope.n2 = Math.floor(Math.random() * $scope.maxNumber);
                $scope.question = $scope.n1 + " + " + $scope.n2;
                $scope.variable1 = Math.floor(Math.random() * ($scope.maxNumber - $scope.minNumber + 1) + $scope.minNumber);
                $scope.variable2 = Math.floor(Math.random() * ($scope.maxNumber - $scope.minNumber + 1) + $scope.minNumber);
                $scope.variable3 = Math.floor(Math.random() * ($scope.maxNumber - $scope.minNumber + 1) + $scope.minNumber);
                $scope.answer = $scope.n1 + $scope.n2;
            }
        } else {
            $scope.minNumber = 1;
            $scope.maxNumber = 70;
            while ($scope.answer > 70
            || $scope.variable1 == $scope.variable2
            || $scope.variable1 == $scope.variable3
            || $scope.variable2 == $scope.variable3
            || $scope.answer == $scope.variable1
            || $scope.answer == $scope.variable2
            || $scope.answer == $scope.variable3) {
                $scope.n1 = Math.floor(Math.random() * $scope.maxNumber) + 1;
                $scope.n2 = Math.floor(Math.random() * $scope.maxNumber);
                $scope.question = $scope.n1 + " + " + $scope.n2;
                $scope.variable1 = Math.floor(Math.random() * ($scope.maxNumber - $scope.minNumber + 1) + $scope.minNumber);
                $scope.variable2 = Math.floor(Math.random() * ($scope.maxNumber - $scope.minNumber + 1) + $scope.minNumber);
                $scope.variable3 = Math.floor(Math.random() * ($scope.maxNumber - $scope.minNumber + 1) + $scope.minNumber);
                $scope.answer = $scope.n1 + $scope.n2;
            }
        }

        //Progress bar
        if ($scope.compteurProgressBar == 10) {
            $scope.compteurProgressBar = 1;
            $scope.progressBar = "Question : " + $scope.compteurProgressBar + "/ 10"
        } else {
            $scope.compteurProgressBar++;
            $scope.progressBar = "Question : " + $scope.compteurProgressBar + "/ 10"
        }


        $scope.answersforqcm = [$scope.variable1, $scope.variable2, $scope.variable3, $scope.answer];
        $scope.tests = shuffleArray($scope.answersforqcm);

        $scope.userAnswer = "";

        document.getElementById('btn1').disabled = '';
        document.getElementById('btn2').disabled = '';
        document.getElementById('btn3').disabled = '';
        document.getElementById('btn4').disabled = '';
    }
    $scope.onVoiceAnswer = function () {
        if ($scope.userAnswer && parseInt($scope.userAnswer) == $scope.answer) {
            $scope.onRightAnswer();
        }
    }

    $scope.onSubmitAnswer = function (event) {

        console.log(event);
        $scope.inputValue = event.target.innerText;

        if ($scope.inputValue && parseInt($scope.inputValue) == $scope.answer) {
            $scope.onRightAnswer();
        } else {
            $scope.onWrongAnswer();
            document.getElementById('btn1').disabled = 'disabled';
        }
    }
    $scope.onSubmitAnswer2 = function (event) {

        console.log(event);
        $scope.inputValue2 = event.target.innerText;

        if ($scope.inputValue2 && parseInt($scope.inputValue2) == $scope.answer) {
            $scope.onRightAnswer();
        } else {
            $scope.onWrongAnswer();
            document.getElementById('btn2').disabled = 'disabled';
        }
    }
    $scope.onSubmitAnswer3 = function (event) {

        console.log(event);
        $scope.inputValue3 = event.target.innerText;

        if ($scope.inputValue3 && parseInt($scope.inputValue3) == $scope.answer) {
            $scope.onRightAnswer();
        } else {
            $scope.onWrongAnswer();
            document.getElementById('btn3').disabled = 'disabled';
        }
    }
    $scope.onSubmitAnswer4 = function (event) {

        console.log(event);
        $scope.inputValue4 = event.target.innerText;

        if ($scope.inputValue4 && parseInt($scope.inputValue4) == $scope.answer) {
            $scope.onRightAnswer();
        } else {
            $scope.onWrongAnswer();
            document.getElementById('btn4').disabled = 'disabled';
        }
    }

    $scope.onRightAnswer = function () {

        var good_gif = Math.floor(Math.random() * 2);

        if (good_gif == 0)
            $scope.url = "images/good_girl.gif";
        else
            $scope.url = "images/good_boy.gif";

        $scope.noOfGoodAnswers++;
        $scope.numberOfQuestions++;
        if ($scope.numberOfQuestions >= 10) {
            $('#end-run-modal').modal();
            $('#final-score').innerHTML = '' + $scope.noOfGoodAnswers + ' / ' +
                $scope.numberOfQuestions + ' avec ' + (3 - $scope.noOfApples) + ' erreurs';
            //TODO: envoyer le score en ajax sur un POST /user/score...
        }
        else {
            $scope.getNewQuestion();
        }

        /*Gestion des lvls*/
        if ($scope.numberOfQuestions == 10 && $scope.noOfGoodAnswers >= 8) {
            $scope.lvl++;
        }
    }

    $scope.onWrongAnswer = function () {

        var good_gif = Math.floor(Math.random() * 2);

        if (good_gif == 0)
            $scope.url = "images/bad_girl.gif";
        else
            $scope.url = "images/bad_boy.gif";

        $scope.noOfGoodAnswers--;
        $scope.noOfApples--;
        if ($scope.noOfApples <= 0) {
            $("#lost-modal").modal();
        }
        //document.getElementById('btnAnswer1').disabled = 'disabled';
    }
    $scope.skipQuestion = function () {
        $scope.getNewQuestion();
        $scope.noOfGoodAnswers--;
        $scope.noOfApples--;
        if ($scope.noOfApples <= 0) {
            $("#lost-modal").modal();
        }
    }
    $scope.range = function (num) {
        return new Array(num);
    }
}]);
