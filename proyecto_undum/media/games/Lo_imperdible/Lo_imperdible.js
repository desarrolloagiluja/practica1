// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

// En modo depuraciÃ³n, que no haya efectos de jquery
jQuery.fx.off=true

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation (
	"<h1>Vuelta a casa</h1>\
    <p>Volvía de hacer unas compras, pesaban un poco pero no era algo que molestase mucho.  \
    Llegué a casa y me dispuse a abrir la puerta, pero surgió un problema, no encontraba las llaves.<br/>\
	Estaba completamente seguro que las había cogido por la mañana.<br/>\
	Necesitaba entrar, porque es demasiado tarde y es de noche. Supongo que podría <a href='./bolsas' class='once'>buscar en las bolsas de la compra</a>, tambien miré mi móvil, tenía el número de teléfono \
	del cerrajero para <a href='llamar'>llamarlo</a> o podría ir a casa de la vecina, quizás me puede dejar <a href='balcon'>colarme por el balcón</a>.</p>",
	  {
	    actions: {
                'bolsas': function( character, system, action) {
					system.setCharacterText( "<p>No las encuentro aquí, no tiene sentido que las guardase con la compra</p>" );
				}
	    }   
	  }
	),
	
	llamar: new undum.SimpleSituation(
		"<p>Abro la agenda de mi móvil y veo que tengo a dos contactos cerrajeros</p>\
		<p>Vuelvo a mirar la agenda y pienso que a Juan (uno de los cerrajeros) le debo más de 1000 euros por otras cerraduras que me cambió en el pasado y le dejé sin pagar.</p>\
		<p>Alfonso, que el otro cerrajero, trabaja a poco más de dos horas de aquí y no creo que pueda venir así tan improvisto y menos siendo las horas que son...</p>\
		<p>En fin... tengo que decidirme...¿ <a href='./cerrajero01' class='once'>Juan</a> o <a href='cerrajero02'>Alfonso</a> ? </p>s",
		{	actions: {
			
				'cerrajero01': function( character, system, action) {
					system.setCharacterText( "<p>Juan no coge el telefono... Me estoy empezando a agobiar... Creo que tendré que esperar a que venga el vecino para poder <a href='balcon'>colarme por el balcon</a> si quiero dormir esta noche en mi casa</p>s" );
				}
				
			},
			
			enter: function( character, system, form ) {
				system.setCharacterText("<p>- Joder... ¿Y ahora a quien llamo?</p>");
			
			}
		}
		
	),
	
	
	cerrajero02: new undum.SimpleSituation( 				
		"<p>Alfonso me ha cogido el telefono, pero me ha dicho que siendo la hora que es, no podría puesto que está bastante lejos \
		y lleva todo el día fuera... Sólo me queda esperar a que venga el vecino para poder <a href='balcon'>colarme por el balcon</a> \
		si quiero dormir esta noche en mi casa </p>\
		<p>Pero por otra parte pienso que no tengo confianza con el vecino para que me deje colarme por el balcon y entrar mi casa \
		por el balcón, y eso le puede suponer a él un riesgo... Por tanto tambíen he pensado en la posibilidad de <a href='esperar'>esperar \
		al día siguiente</a> en el portal hasta que pueda venir el cerrajero</p>s",
		{
			enter: function( character, system, form ) {
				system.setCharacterText("<p></p>");
			
			}
		}
	),
	
	esperar: new undum.SimpleSituation(
		"<p>Espera que te espera y son las 9 de la noche, me acaba de llamar el cerrajero y dice que puede ir aunque sea tarde\
		 pero, ¿De verdad me merece la pena <a href='cerrajerosi'>aceptar que venga</a> y pagar un dineral para que me cambie la cerradura por enésima vez o\
		 decirle que <a href='cerrajerono'>no hace falta</a> y buscarme la vida de otra manera que no sea pagando? </p>s"
	),

	balcon: new undum.SimpleSituation(
		"<p>He llamado al portero del vecino y no ha contestado nadie, puede ser que sea porque no esté el hijo de mi vecina.\
		Esta vecina tiene 90 años y no puede abrir la puerta puesto que tiene un problema de cadera y está inmovilizada\
		<br/>Tendré que <a href='esperarhijo'>esperar a su hijo</a> a que venga a casa para poder llegar o <a href='./agil' class='once'>quizás...</a></p>",
		{
	    actions: {
                'agil': function( character, system, action) {
					system.setCharacterText( "<p>Aún soy jóven y de pequeño me dedicaba a escalar árboles, estoy seguro \
					que desde el que esta al lado podría <a href='arbol' class='once'>saltar</a></p>" );
				}
	    },

			enter: function( character, system, form ) {
				system.setCharacterText("<p></p>");
			
			}	
	  }
	
	),
	esperarhijo: new undum.SimpleSituation(
		"<p>No parecía que el hijo fuese a llegar temprano, porque llevaba un buen rato esperando. Miré de nuevo el móvil \
		y tendría que llamar a alguien, aunque no es que tuviese muchas opciones disponibles, el <a href='nollavesrespuesto'>casero</a> era una de ellas, por poco que me gustase.\
		Sinó tendria que ver si al final Juan el <a href='nocambiacerradura'>cerrajero</a> me puede cojer el teléfono, porque no había demasiadas opciones disponibles.\
		Llorar o patalear no iba a servir, aún podía escalar árboles, estoy seguro \
		que desde el que esta al lado podría <a href='arbol' class='once'>saltar</a></</p>",
		{
			enter: function( character, system, form ) {
				system.setCharacterText("<p></p>");
			
			}
		}
	),
	arbol: new undum.SimpleSituation(
		"<p>No iba a conseguir nada esperando, tenía que ponerme en marcha, así que me armé de valor.\
		Sabía un poco de deporte, así que comencé a escalar el árbol cercano a casa.\
		Cogí un poco de fuerza antes de saltar desde la rama hasta el balcón.\
		Pero no llegué, caí malamente y he tenido que llamar a la ambulancia, esta noche la pasaría en el hospital y con una pierna escayolada. </p>\
		<br/>\
		<h1>FIN</h1>"
	),
	
	cerrajerosi: new undum.SimpleSituation(
		"<p>Le dije que si al cerrajero, era mi oportunidad de poder volver a casa, estaba ansioso y ya me daba igual gastarme dinero en ello.\
		Así que podría dormir en casa aunque con unos cuantos euros menos en el bolsillo, pero al menos el día acabaría ya.</p>\
		<br/>\
		<h1>FIN</h1>"
	),
	cerrajerono: new undum.SimpleSituation(
		"<p>No quería gastar más dinero, no es que me sobrara mucho. Esperaría un rato en la puerta, no sabía cuánto tiempo, \
		quizás alguien encontraba las \
		llaves o el casero se acercaba, pero me quedaría junto a la puerta sentado.</p>\
		<br/>\
		<h1>FIN</h1>"
	),
	
	
	nocambiacerradura: new undum.SimpleSituation(
		"<p>Tras llamar al cerrajero, este le responde que no le va a cambiar la cerradura puesto que le debe bastante dinero y ya\
		  son demasiadas veces que le ha cambiado la cerradura. Por tanto, tengo que decidirme <a href='cerrajerosi'>si pagar al cerrajero</a> la cantidad de 1320 euros\
		  o llamar a mi <a href='nollavesrespuesto'>casero</a> para ver si tiene alguna llave de repuesto.</p>"
	
	),
	nollavesrespuesto: new undum.SimpleSituation(
		"<p> Responde el casero y yo le pregunto con miedo si tendría por casualidad otras llaves de repuesto ya que las que tenia, eran\
		otras de repuesto de mi casero. Él me responde que no, no tiene otras, que si he perdido las llaves que asuma mi responsabilidad \
		y <a href='cerrajerosi'>llame al cerrajero y le pague todo lo que le debo</a>. Pero pensándolo bien... y si en vez de pagarle, ¿me hago\
		el valiente y me subo por el árbol <a href='arbol'>trepando?</a></p>"
	)
};


// Ejemplo de declaraciÃ³n separada

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    inventario: new undum.QualityGroup('Inventario', {priority:"0001"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setCharacterText("<p> </p>");
};

