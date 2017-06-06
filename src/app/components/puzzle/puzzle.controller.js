export class PuzzleController {
	constructor($scope, $state, $log, utils) {
		'ngInject';

		this.$log = $log;
		this.$scope = $scope;
		this.$state = $state;
		this.$parent = $scope.$parent;
		this.utils = utils;

		this.$log.info('contructor()', this, $scope);
	}

	$onInit() {
		this.$scope.$on('$destroy', this.destroy());

		this.mainCtrl = this.$scope.main;
		this.model = this.mainCtrl.puzzleModel;

		this.agModel = this.mainCtrl.answerGridModel;
		this.lcModel = this.mainCtrl.letterColumnsModel;
		this.answerGrid = this.agModel.grid;
		this.letterColumns = this.lcModel.columns;

		this.$scope.puzzleModel = this.model;
		this.title = this.model.title;

		this.$log.info('$onInit()', this);
	}

	destroy() {
		return () => {
			this.$log.info('destroy', this);

			this.model.clear();
		};
	}
}
