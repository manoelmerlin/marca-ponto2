<?php
class HoursController extends AppController {
    public $components = array('RequestHandler');

    
    public function beforeFilter()
    {
        parent::beforeFilter();
        $this->response->header('Access-Control-Allow-Origin', '*');
    }

    public function index($id = null, $month = null)
    { 
        $this->layout = 'ajax';
        $this->autoRender = false;
        $data = new DateTime();
        $dateToday =  $data->format('d-m-Y H:i');
        $dateToChange = '15-01-2020 13:210202';
        $month = strftime('%B');
        $actualMonth = $this->getMonth($month);
        if ($dateToChange == $dateToday) {
            $days = array();
            for ($i = 0; $i <= 31; $i++) {
                $days[] = ($i < 10) ? "0" . $i . '-' . $data->format('m') . '-' . $data->format('Y') : $i . '-' . $data->format('m') . '-' . $data->format('Y');
            }
            unset($days[0]);    
            foreach ($days as $d) {
                $this->Hour->create();
                $save = array(
                    'Hour' => array(
                        'dia' => $d
                    )
                );
                $this->Hour->save($save);                
            }
        }
        $hours = $this->Hour->find('all');
        $a = array();
        foreach ($hours as $h) {
            $a[] = $h["Hour"];
        }
        $this->response->type('application/json');
		return $this->response->body(json_encode($a));
    }

    public function add() {
        $data = $this->request->input('json_decode', true);
        $this->Hour->save($data);
        return true;
    }

    public function edit(){
        $this->layout = false;
        $data = $this->request->input('json_decode', true);
        $this->hour->id = $data['id'];
        $save = array(
            'Hour' => $data
        );
        if ($this->Hour->save($save)) {
            return $this->response->body('Salvo com sucesso');     
        }
        return 'Error ao salvar';
    }

    public function getMonth($month) {
        switch($month) {
            case 'January':
                $month = 'Janeiro';
            break;
            case 'February':
                $month = 'Fevereiro';
            break;
            case 'March':
                $month = 'Janeiro';
            break;
            case 'April':
                $month = 'Janeiro';
            break;
            case 'May':
                $month = 'Janeiro';
            break;
            case 'July':
                $month = 'Janeiro';
            break;
            case 'August':
                $month = 'Janeiro';
            break;
            case 'September':
                $month = 'Janeiro';
            break;
            case 'October':
                $month = 'Janeiro';
            break;
            case 'November':
                $month = 'Janeiro';
            break;
            case 'December':
                $month = 'Janeiro';
            break;
        }
        return $month;
    }

}