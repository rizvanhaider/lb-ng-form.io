angular
  .module("formioApp", ["ui.bootstrap", "ui.select", "formio", "ngFormBuilder", "ngJsonExplorer"])
  .run([
      "$rootScope",
      'formioComponents',
      '$timeout',
      function(
        $rootScope,
        formioComponents,
        $timeout
      ) {
      }
    ])
  .controller("formCtrl", function(
        $scope,
        $http,
        $rootScope,
        formioComponents,
        $timeout
        ){
    
        $scope.displays = [{
          name: 'form',
          title: 'Form'
        }, {
          name: 'wizard',
          title: 'Wizard'
        }];
		$scope.saveForm = function(_form, _name){
			$http.post("http://localhost:3333/api/MyForms", {
			  "formName": _name,
			  "formSchema": _form
			}).then(
			function(success){console.log("Saved: ", success)}, 
			function(err){console.log("Err saving: ", err)})
		}
        $scope.form = {
          components: [{
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "First Name",
            "key": "firstName",
            "placeholder": "Enter your first name",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": false,
              "when": null,
              "eq": ""
            },
            "type": "textfield"
          }, {
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Last Name",
            "key": "lastName",
            "placeholder": "Enter your last name",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": false,
              "when": null,
              "eq": ""
            },
            "type": "textfield"
          }, {
            "input": true,
            "tableView": true,
            "label": "Message",
            "key": "message",
            "placeholder": "What do you think?",
            "prefix": "",
            "suffix": "",
            "rows": 3,
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "persistent": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": ""
            },
            "type": "textarea",
            "conditional": {
              "show": false,
              "when": null,
              "eq": ""
            }
          }, {
            type: 'button',
            theme: 'primary',
            disableOnInvalid: true,
            action: 'submit',
            block: false,
            rightIcon: '',
            leftIcon: '',
            size: 'md',
            key: 'submit',
            tableView: false,
            label: 'Submit',
            input: true
          }],
          display: 'form'
        };

        $scope.renderForm = true;
        $scope.$on('formUpdate', function(event, form) {
          angular.merge($scope.form, form);
          $scope.renderForm = false;
          setTimeout(function() {
            $scope.renderForm = true;
          }, 10);
        });

        var originalComps = _.cloneDeep($scope.form.components);
        originalComps.push(angular.copy(formioComponents.components.button.settings));
        $scope.jsonCollapsed = true;
        $timeout(function() {
          $scope.jsonCollapsed = false;
        }, 200);
        var currentDisplay = 'form';
        $scope.$watch('form.display', function(display) {
          if (display && (display !== currentDisplay)) {
            currentDisplay = display;
            if (display === 'form') {
              $scope.form.components = originalComps;
            } else {
              $scope.form.components = [{
                type: 'panel',
                input: false,
                title: 'Page 1',
                theme: 'default',
                components: originalComps
              }];
            }
          }
        });
})
  .controller("formViewCtrl", function(
        $scope,
        $http,
        $rootScope,
        formioComponents,
        $timeout
  ){
	   $scope.displays = [{
          name: 'form',
          title: 'Form'
        }, {
          name: 'wizard',
          title: 'Wizard'
        }];
		$scope.renderForm = function(form){
			$scope.form = form.formSchema;
			console.log(form)
		}
       $http.get("http://localhost:3333/api/MyForms").then(function(data){
         console.log("data: ", data.data)
        $scope.forms = data.data
      }, function(err){

      })
  });