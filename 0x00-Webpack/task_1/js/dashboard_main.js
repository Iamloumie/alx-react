const $ = require('jquery');
const _ = require('lodash');

$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - ALX</p>');

const updateCounter = () => {
	let times = $('#count').html() || 0;
	$('button').on('click', () => {
		times++;
		$('#count').html(`${times} clicks on the button`);
	});
};

_.debounce(updateCounter, 500);
updateCounter();

