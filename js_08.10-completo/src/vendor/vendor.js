import 'bootstrap/dist/css/bootstrap.min.css'

import Tooltip from 'bootstrap/js/dist/tooltip'

const tts = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tts.forEach(e1 => new Tooltip(e1));
