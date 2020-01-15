<?php
class MonthsController extends AppController{

    public function beforeFilter() {
		parent::beforeFilter();
		$this->response->header('Access-Control-Allow-Origin', '*');
	}

    public function index() {
        $this->layout = 'ajax';
        $this->autoRender = false;
        $mes = $this->Month->find("list", array(
            'fields' => array('id', 'name'),
            'conditions' => array('id <=' => 12)
        ));

        $mes = json_encode($mes);

        pr(($mes));
    }
    
}