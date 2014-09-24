
window.userChoice;

if (window.jQuery) {  
    console.log("JQ is loaded")
} else {
    console.log("JQ is not loaded")
}



// 1) SELECT FUNCTIONS TO HIGHLIGHT CERTAIN RAPPERS

    var select = function(userChoice){
        if(userChoice != null){
            window.userChoice = userChoice;
            highlightRappers(window.userChoice)
        } else {
            window.userChoice = 'all'
        
        }
    }

    var highlightRappers = function(globaluserChoice){
        if(globaluserChoice == 'all'){
            d3.selectAll("circle")
            .style("opacity", 1)
            .style("fill", "gray")
        } else {
        console.log(globaluserChoice)
        d3.selectAll("circle")
            .style("opacity", 0.4)
            .style("fill", "gray")
            d3.selectAll("circle" + "." + globaluserChoice)
            .style("opacity", 1)
            .style("fill", 
                function(d){
                   name = "url(#" + d.id + ")"
                    return name
            });
        }
    }

// 2) CREATE A NEW RAPPER DIV WHEN RAPPER CIRCLE IS CLICKED (IF IT DOESN'T ALREADY EXIST)
    var moreInfo = function(rapperName){
         $(".rappers").hide()
         $("#" + rapperName + "info").show();
         
    }

// 3) POPULATE NEW RAPPER DIV WITH RAPPER INFO FROM DATABASE
    var populateRapperDiv = function(name){
        console.log("populating the div for " + name)
        var svg = d3.select("#" + name + "info")
            .append("svg")
            .attr("width", 1000)
            .attr("height", 500)
            .attr("id", "svg_for_" + name)

        var image = d3.select("#" + "svg_for_" + name)
            .append("image")
            .attr('x', -9)
            .attr('y', -12)
            .attr('width', 200)
            .attr('height', 250)
            .attr("xlink:href", "/images/" + name + "2.jpg")

        console.log("running populateRapperDiv");

        console.log("word cloud goes here");
        

        console.log(d.frequency);
        console.log(d.song);

        var frequency_list = d.frequency;

    var fill = d3.scale.category20();

    console.log("total words: " + d.total_words)

    $scaleFactor = d.total_words/10000

    d3.layout.cloud().size([700, 700])
            .words(frequency_list)
            .rotate(0)
            .fontSize(function(d) { 
                console.log("scaleFactor: " + $scaleFactor)
                return d.size/$scaleFactor; })
            .on("end", draw)
            .start();

    function draw(words) {
        d3.select("#" + "svg_for_" + name).append("svg")
        .attr("width", 800)
        .attr("height", 800)
        .attr("class", "wordcloud")
      .append("g")
        .attr("transform", "translate(500,200)")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d, i) { return fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
    }

    $("#" + name + "info").append(d.song);
    console.log(d.song)


    }



var data = [
{
    name: "50 Cent",
    x: 1956/3281,
    r: 239966/130000,
    // r is the radius of the circle, and is total_words/100000.
    id: "fifty_cent",
    gender: "male",
    race: "black",
    // unique words in first 10000 words
    total_words: 239966,
    unique_words: 1956,
    average_grade_level: 0.076,
    syllables_per_word: 1.33,
    one_syllable_words: 0.722,
    // as a percentage
    testVar: 0.1,
    word_length: 3.5,
    text: "this, is, a, sample, text, for, words, that, would, represent, lyrics, for, Drake",
    frequency: [
        {"text":"goin", "size": 83}, {"text":"bo", "size": 83}, {"text":"ho", "size": 83}, {"text":"nothin", "size": 84}, {"text":"cash", "size": 85}, {"text":"sick", "size": 85}, {"text":"crib", "size": 85}, {"text":"smile", "size": 85}, {"text":"blood", "size": 87}, {"text":"went", "size": 87}, {"text":"cuz", "size": 87}, {"text":"fucked", "size": 88}, {"text":"benz", "size": 89}, {"text":"dope", "size": 90}, {"text":"hell", "size": 90}, {"text":"shots", "size": 90}, {"text":"pull", "size": 91}, {"text":"seen", "size": 91}, {"text":"touch", "size": 91}, {"text":"left", "size": 91}, {"text":"case", "size": 92}, {"text":"nah", "size": 92}, {"text":"old", "size": 92}, {"text":"mad", "size": 92}, {"text":"shine", "size": 92}, {"text":"everybody", "size": 93}, {"text":"body", "size": 93}, {"text":"style", "size": 93}, {"text":"mind", "size": 93}, {"text":"banks", "size": 94}, {"text":"ready", "size": 94}, {"text":"kill", "size": 94}, {"text":"dead", "size": 95}, {"text":"cut", "size": 97}, {"text":"eat", "size": 97}, {"text":"bullshit", "size": 98}, {"text":"saying", "size": 98}, {"text":"best", "size": 99}, {"text":"hand", "size": 100}, {"text":"home", "size": 100}, {"text":"beef", "size": 100}, {"text":"flow", "size": 102}, {"text":"things", "size": 102}, {"text":"line", "size": 103}, {"text":"believe", "size": 103}, {"text":"lot", "size": 103}, {"text":"listen", "size": 106}, {"text":"house", "size": 106}, {"text":"gangsta", "size": 106}, {"text":"hey", "size": 106}, {"text":"going", "size": 106}, {"text":"used", "size": 107}, {"text":"murder", "size": 107}, {"text":"night", "size": 108}, {"text":"low", "size": 109}, {"text":"live", "size": 110}, {"text":"ask", "size": 110}, {"text":"street", "size": 111}, {"text":"son", "size": 111}, {"text":"thought", "size": 111}, {"text":"friends", "size": 113}, {"text":"getting", "size": 113}, {"text":"shoot", "size": 113}, {"text":"whip", "size": 113}, {"text":"party", "size": 114}, {"text":"crack", "size": 115}, {"text":"clip", "size": 115}, {"text":"hands", "size": 116}, {"text":"bring", "size": 116}, {"text":"till", "size": 117}, {"text":"beat", "size": 117}, {"text":"gone", "size": 117}, {"text":"dick", "size": 118}, {"text":"motherfucker", "size": 118}, {"text":"break", "size": 120}, {"text":"heart", "size": 121}, {"text":"lil", "size": 121}, {"text":"world", "size": 122}, {"text":"long", "size": 123}, {"text":"hold", "size": 124}, {"text":"away", "size": 125}, {"text":"til", "size": 125}, {"text":"walk", "size": 125}, {"text":"hate", "size": 127}, {"text":"block", "size": 128}, {"text":"black", "size": 129}, {"text":"ride", "size": 130}, {"text":"crazy", "size": 130}, {"text":"trying", "size": 130}, {"text":"smoke", "size": 131}, {"text":"came", "size": 131}, {"text":"face", "size": 132}, {"text":"tryin", "size": 132}, {"text":"god", "size": 133}, {"text":"rich", "size": 137}, {"text":"gettin", "size": 138}, {"text":"change", "size": 140}, {"text":"die", "size": 142}, {"text":"damn", "size": 147}, {"text":"round", "size": 147}, {"text":"homie", "size": 149}, {"text":"roll", "size": 150}, {"text":"drop", "size": 150}, {"text":"day", "size": 151}, {"text":"pussy", "size": 151}, {"text":"kid", "size": 155}, {"text":"shorty", "size": 156}, {"text":"start", "size": 158}, {"text":"york", "size": 160}, {"text":"catch", "size": 160}, {"text":"told", "size": 160}, {"text":"paper", "size": 161}, {"text":"bad", "size": 162}, {"text":"heard", "size": 163}, {"text":"bitches", "size": 163}, {"text":"high", "size": 163}, {"text":"turn", "size": 164}, {"text":"work", "size": 165}, {"text":"fuckin", "size": 166}, {"text":"really", "size": 167}, {"text":"hoes", "size": 168}, {"text":"won", "size": 171}, {"text":"top", "size": 171}, {"text":"try", "size": 174}, {"text":"huh", "size": 174}, {"text":"mean", "size": 174}, {"text":"blow", "size": 175}, {"text":"ve", "size": 176}, {"text":"club", "size": 178}, {"text":"stay", "size": 181}, {"text":"stop", "size": 184}, {"text":"hear", "size": 190}, {"text":"big", "size": 192}, {"text":"leave", "size": 197}, {"text":"rap", "size": 199}, {"text":"ha", "size": 202}, {"text":"gonna", "size": 203}, {"text":"show", "size": 205}, {"text":"fucking", "size": 207}, {"text":"mma", "size": 208}, {"text":"gun", "size": 209}, {"text":"hard", "size": 213}, {"text":"oh", "size": 218}, {"text":"pop", "size": 220}, {"text":"watch", "size": 223}, {"text":"wit", "size": 224}, {"text":"said", "size": 225}, {"text":"bout", "size": 225}, {"text":"shot", "size": 227}, {"text":"real", "size": 228}, {"text":"little", "size": 229}, {"text":"uh", "size": 236}, {"text":"feel", "size": 237}, {"text":"life", "size": 237}, {"text":"cent", "size": 239}, {"text":"hot", "size": 240}, {"text":"play", "size": 240}, {"text":"game", "size": 247}, {"text":"better", "size": 257}, {"text":"boy", "size": 270}, {"text":"gotta", "size": 274}, {"text":"unit", "size": 275}, {"text":"talk", "size": 279}, {"text":"good", "size": 289}, {"text":"need", "size": 299}, {"text":"run", "size": 320}, {"text":"way", "size": 333}, {"text":"look", "size": 343}, {"text":"tell", "size": 344}, {"text":"hood", "size": 346}, {"text":"think", "size": 351}, {"text":"head", "size": 358}, {"text":"hit", "size": 377}, {"text":"girl", "size": 379}, {"text":"gon", "size": 399}, {"text":"baby", "size": 405}, {"text":"new", "size": 409}, {"text":"right", "size": 430}, {"text":"yo", "size": 438}, {"text":"time", "size": 447}, {"text":"love", "size": 522}, {"text":"ass", "size": 553}, {"text":"wanna", "size": 574}, {"text":"say", "size": 584}, {"text":"want", "size": 599}, {"text":"let", "size": 605}, {"text":"come", "size": 666}, {"text":"cause", "size": 669}, {"text":"money", "size": 691}, {"text":"make", "size": 706}, {"text":"ya", "size": 803}, {"text":"bitch", "size": 822}, {"text":"just", "size": 823}, {"text":"fuck", "size": 837}, {"text":"man", "size": 848}, {"text":"yeah", "size": 884}, {"text":"shit", "size": 1401}, {"text":"niggas", "size": 1522}, {"text":"know", "size": 1590}, {"text":"nigga", "size": 1954}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/24037401&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"

},
{
    name: "Aesop Rock",
    x: 3281/3281,
    r: 128462/130000,
    id: "aesop_rock",
    gender: "male",
    race: "white",
    unique_words: 3281,
    total_words: 128462,
    average_grade_level: 0.142,
    syllables_per_word: 1.51,
    one_syllable_words: 0.616,
    word_length: 4.2,
    testVar: 0.11,
    frequency: [
    {
        "text": "earth", "size":37
    }, 
    {
        "text":"past", "size":38
    }, 
    {"text":"fresh", "size":38}, {"text":"saw", "size":38}, {"text":"hard", "size":38}, {"text":"soul", "size":38}, {"text":"dreams", "size":38}, {"text":"uh", "size":38}, {"text":"pass", "size":39}, {"text":"bring", "size":39}, {"text":"caught", "size":39}, {"text":"metal", "size":39}, {"text":"gotta", "size":39}, {"text":"bit", "size":39}, {"text":"room", "size":39}, {"text":"hot", "size":39}, {"text":"york", "size":39}, {"text":"low", "size":39}, {"text":"touch", "size":39}, {"text":"gold", "size":39}, {"text":"best", "size":39}, {"text":"wings", "size":40}, {"text":"fucking", "size":40}, {"text":"ready", "size":40}, {"text":"library", "size":40}, {"text":"stand", "size":40}, {"text":"sound", "size":40}, {"text":"didn", "size":41}, {"text":"chorus", "size":41}, {"text":"mic", "size":41}, {"text":"friends", "size":41}, {"text":"peace", "size":41}, {"text":"slow", "size":41}, {"text":"crooked", "size":42}, {"text":"hope", "size":42}, {"text":"stay", "size":42}, {"text":"end", "size":42}, {"text":"walking", "size":42}, {"text":"live", "size":42}, {"text":"place", "size":42}, {"text":"men", "size":43}, {"text":"car", "size":43}, {"text":"mouth", "size":43}, {"text":"ya", "size":43}, {"text":"walked", "size":43}, {"text":"kid", "size":43}, {"text":"dirt", "size":43}, {"text":"perfect", "size":43}, {"text":"free", "size":43}, {"text":"close", "size":43}, {"text":"cats", "size":43}, {"text":"thousand", "size":44}, {"text":"glass", "size":44}, {"text":"smoke", "size":44}, {"text":"hear", "size":44}, {"text":"mean", "size":44}, {"text":"wait", "size":44}, {"text":"verse", "size":45}, {"text":"land", "size":45}, {"text":"goes", "size":45}, {"text":"ok", "size":45}, {"text":"friend", "size":45}, {"text":"set", "size":45}, {"text":"feet", "size":45}, {"text":"breath", "size":46}, {"text":"step", "size":46}, {"text":"pick", "size":46}, {"text":"gone", "size":46}, {"text":"side", "size":46}, {"text":"sick", "size":47}, {"text":"sky", "size":47}, {"text":"blue", "size":47}, {"text":"damn", "size":47}, {"text":"sun", "size":47}, {"text":"hands", "size":47}, {"text":"mind", "size":47}, {"text":"style", "size":48}, {"text":"till", "size":48}, {"text":"gonna", "size":48}, {"text":"pull", "size":48}, {"text":"build", "size":48}, {"text":"work", "size":49}, {"text":"cold", "size":50}, {"text":"second", "size":50}, {"text":"money", "size":51}, {"text":"brick", "size":51}, {"text":"used", "size":51}, {"text":"hit", "size":51}, {"text":"alive", "size":51}, {"text":"game", "size":51}, {"text":"dream", "size":52}, {"text":"baby", "size":52}, {"text":"came", "size":52}, {"text":"talk", "size":52}, {"text":"black", "size":53}, {"text":"yes", "size":53}, {"text":"red", "size":53}, {"text":"start", "size":54}, {"text":"show", "size":54}, {"text":"seen", "size":54}, {"text":"days", "size":54}, {"text":"bitch", "size":54}, {"text":"food", "size":55}, {"text":"die", "size":55}, {"text":"broken", "size":55}, {"text":"half", "size":55}, {"text":"death", "size":56}, {"text":"hate", "size":56}, {"text":"blood", "size":56}, {"text":"stop", "size":56}, {"text":"open", "size":56}, {"text":"war", "size":57}, {"text":"boy", "size":57}, {"text":"dog", "size":57}, {"text":"burn", "size":57}, {"text":"born", "size":57}, {"text":"brain", "size":58}, {"text":"door", "size":58}, {"text":"spit", "size":58}, {"text":"line", "size":59}, {"text":"play", "size":60}, {"text":"need", "size":61}, {"text":"leave", "size":61}, {"text":"cut", "size":61}, {"text":"hell", "size":61}, {"text":"high", "size":63}, {"text":"news", "size":63}, {"text":"try", "size":63}, {"text":"really", "size":63}, {"text":"check", "size":63}, {"text":"sit", "size":63}, {"text":"break", "size":63}, {"text":"eye", "size":63}, {"text":"come", "size":64}, {"text":"lost", "size":64}, {"text":"turn", "size":66}, {"text":"better", "size":67}, {"text":"world", "size":67}, {"text":"light", "size":68}, {"text":"inside", "size":68}, {"text":"feel", "size":70}, {"text":"think", "size":70}, {"text":"yo", "size":71}, {"text":"run", "size":71}, {"text":"maybe", "size":71}, {"text":"watch", "size":72}, {"text":"bad", "size":73}, {"text":"long", "size":73}, {"text":"old", "size":74}, {"text":"people", "size":75}, {"text":"sleep", "size":75}, {"text":"love", "size":76}, {"text":"til", "size":77}, {"text":"trying", "size":77}, {"text":"okay", "size":78}, {"text":"say", "size":79}, {"text":"kill", "size":81}, {"text":"tell", "size":81}, {"text":"box", "size":82}, {"text":"oh", "size":84}, {"text":"won", "size":85}, {"text":"aesop", "size":86}, {"text":"water", "size":86}, {"text":"look", "size":87}, {"text":"big", "size":88}, {"text":"eyes", "size":88}, {"text":"heart", "size":88}, {"text":"night", "size":89}, {"text":"said", "size":91}, {"text":"left", "size":91}, {"text":"hand", "size":92}, {"text":"hold", "size":93}, {"text":"good", "size":96}, {"text":"dead", "size":97}, {"text":"head", "size":98}, {"text":"want", "size":101}, {"text":"way", "size":101}, {"text":"home", "size":104}, {"text":"wanna", "size":107}, {"text":"yeah", "size":110}, {"text":"walk", "size":117}, {"text":"face", "size":119}, {"text":"cause", "size":122}, {"text":"right", "size":124}, {"text":"god", "size":128}, {"text":"rock", "size":128}, {"text":"ve", "size":144}, {"text":"city", "size":152}, {"text":"life", "size":163}, {"text":"shit", "size":166}, {"text":"make", "size":172}, {"text":"day", "size":176}, {"text":"fuck", "size":176}, {"text":"time", "size":176}, {"text":"new", "size":180}, {"text":"let", "size":212}, {"text":"man", "size":218}, {"text":"know", "size":223}, {"text":"little", "size":241}, {"text":"just", "size":305} ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/40422892&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Beastie Boys",
    x: 2056/3281,
    r: 133220/130000,
    id: "beastie_boys",
    gender: "male",
    race: "white",
    unique_words: 2056,
    total_words: 133220,
    average_grade_level: 0.089,
    syllables_per_word: 1.35,
    one_syllable_words: 0.718,
    word_length: 3.6,
    testVar: 0.12,
    text: "Kanye, kanye, kanye, blah blah",
    frequency: [
        {"text": "light", "size":50}, {"text":"hip", "size":50}, {"text":"ready", "size":50}, {"text":"wrong", "size":50}, {"text":"write", "size":50}, {"text":"shot", "size":50}, {"text":"hot", "size":50}, {"text":"shadrach", "size":50}, {"text":"white", "size":50}, {"text":"balloon", "size":50}, {"text":"ho", "size":52}, {"text":"guy", "size":52}, {"text":"looking", "size":52}, {"text":"body", "size":52}, {"text":"mad", "size":52}, {"text":"damn", "size":52}, {"text":"coming", "size":52}, {"text":"dj", "size":52}, {"text":"stand", "size":52}, {"text":"crazy", "size":52}, {"text":"hold", "size":54}, {"text":"known", "size":54}, {"text":"cut", "size":54}, {"text":"control", "size":56}, {"text":"microphone", "size":56}, {"text":"running", "size":56}, {"text":"watch", "size":56}, {"text":"inside", "size":56}, {"text":"bills", "size":56}, {"text":"takes", "size":56}, {"text":"grab", "size":56}, {"text":"bust", "size":56}, {"text":"attack", "size":56}, {"text":"song", "size":58}, {"text":"manhattan", "size":58}, {"text":"big", "size":58}, {"text":"holy", "size":58}, {"text":"hit", "size":58}, {"text":"city", "size":58}, {"text":"disco", "size":60}, {"text":"cold", "size":60}, {"text":"news", "size":60}, {"text":"finger", "size":62}, {"text":"beats", "size":62}, {"text":"bet", "size":62}, {"text":"left", "size":62}, {"text":"took", "size":62}, {"text":"hand", "size":62}, {"text":"dance", "size":64}, {"text":"alright", "size":64}, {"text":"intergalactic", "size":64}, {"text":"record", "size":64}, {"text":"live", "size":64}, {"text":"goin", "size":64}, {"text":"read", "size":66}, {"text":"planetary", "size":66}, {"text":"mc", "size":66}, {"text":"game", "size":66}, {"text":"ill", "size":66}, {"text":"best", "size":68}, {"text":"nice", "size":68}, {"text":"york", "size":68}, {"text":"start", "size":68}, {"text":"electrify", "size":70}, {"text":"sleep", "size":70}, {"text":"went", "size":70}, {"text":"def", "size":70}, {"text":"step", "size":70}, {"text":"set", "size":72}, {"text":"music", "size":72}, {"text":"happen", "size":72}, {"text":"bad", "size":74}, {"text":"better", "size":74}, {"text":"king", "size":74}, {"text":"long", "size":74}, {"text":"things", "size":74}, {"text":"baby", "size":74}, {"text":"style", "size":74}, {"text":"adam", "size":74}, {"text":"bass", "size":74}, {"text":"everybody", "size":76}, {"text":"uh", "size":76}, {"text":"catch", "size":76}, {"text":"seen", "size":76}, {"text":"country", "size":78}, {"text":"run", "size":78}, {"text":"show", "size":78}, {"text":"true", "size":78}, {"text":"high", "size":78}, {"text":"gone", "size":78}, {"text":"brand", "size":78}, {"text":"bring", "size":78}, {"text":"old", "size":78}, {"text":"feeling", "size":78}, {"text":"comes", "size":78}, {"text":"son", "size":78}, {"text":"groove", "size":80}, {"text":"heart", "size":80}, {"text":"home", "size":80}, {"text":"pass", "size":82}, {"text":"beat", "size":82}, {"text":"freak", "size":84}, {"text":"skills", "size":84}, {"text":"rockin", "size":84}, {"text":"need", "size":86}, {"text":"lickin", "size":86}, {"text":"yes", "size":88}, {"text":"break", "size":88}, {"text":"work", "size":88}, {"text":"makin", "size":88}, {"text":"ass", "size":90}, {"text":"real", "size":90}, {"text":"egg", "size":90}, {"text":"play", "size":90}, {"text":"fuck", "size":92}, {"text":"look", "size":92}, {"text":"listen", "size":92}, {"text":"life", "size":92}, {"text":"getting", "size":94}, {"text":"brooklyn", "size":94}, {"text":"hard", "size":96}, {"text":"word", "size":98}, {"text":"pop", "size":98}, {"text":"gettin", "size":98}, {"text":"girls", "size":100}, {"text":"pay", "size":100}, {"text":"goes", "size":102}, {"text":"fly", "size":102}, {"text":"feel", "size":102}, {"text":"ahh", "size":104}, {"text":"house", "size":106}, {"text":"fresh", "size":108}, {"text":"ladies", "size":108}, {"text":"fight", "size":108}, {"text":"cha", "size":108}, {"text":"head", "size":110}, {"text":"ah", "size":112}, {"text":"world", "size":112}, {"text":"boy", "size":114}, {"text":"money", "size":114}, {"text":"root", "size":114}, {"text":"adrock", "size":116}, {"text":"turn", "size":116}, {"text":"hear", "size":116}, {"text":"mca", "size":116}, {"text":"sound", "size":116}, {"text":"face", "size":118}, {"text":"won", "size":122}, {"text":"huh", "size":122}, {"text":"night", "size":124}, {"text":"place", "size":130}, {"text":"try", "size":130}, {"text":"tell", "size":136}, {"text":"ha", "size":138}, {"text":"beastie", "size":138}, {"text":"little", "size":140}, {"text":"day", "size":142}, {"text":"party", "size":148}, {"text":"rhyme", "size":154}, {"text":"think", "size":158}, {"text":"going", "size":160}, {"text":"kick", "size":162}, {"text":"good", "size":164}, {"text":"boys", "size":164}, {"text":"ya", "size":166}, {"text":"girl", "size":170}, {"text":"people", "size":172}, {"text":"stick", "size":172}, {"text":"said", "size":172}, {"text":"stop", "size":176}, {"text":"mind", "size":176}, {"text":"gotta", "size":176}, {"text":"hey", "size":184}, {"text":"love", "size":184}, {"text":"way", "size":200}, {"text":"shit", "size":200}, {"text":"rhymes", "size":202}, {"text":"want", "size":206}, {"text":"oh", "size":212}, {"text":"check", "size":214}, {"text":"mic", "size":216}, {"text":"wanna", "size":224}, {"text":"yo", "size":228}, {"text":"come", "size":232}, {"text":"new", "size":242}, {"text":"funky", "size":264}, {"text":"make", "size":266}, {"text":"let", "size":282}, {"text":"right", "size":290}, {"text":"say", "size":292}, {"text":"ve", "size":346}, {"text":"mike", "size":346}, {"text":"rock", "size":368}, {"text":"gonna", "size":390}, {"text":"yeah", "size":400}, {"text":"man", "size":442}, {"text":"just", "size":444}, {"text":"time", "size":508}, {"text":"cause", "size":582}, {"text":"know", "size":654}
        ],
   song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/104706575&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"



},
{
    name: "Biggie",
    x: 1941/3281,
    r: 125005/130000,
    id: "biggie",
    gender: "male",
    race: "black",
    unique_words: 1941,
    total_words: 125005,
    average_grade_level: 0.089,
    word_length: 3.7,
    syllables_per_word: 1.37,
    one_syllable_words: 0.699,
    sentiment: 0,
    testVar: 0.15,
    text: "jay-z, jay-z, crazy and deranged",
    frequency: [
      {"text":"paper", "size": 45}, {"text":"work", "size": 45}, {"text":"push", "size": 45}, {"text":"stick", "size": 45}, {"text":"junior", "size": 45}, {"text":"ride", "size": 45}, {"text":"witcha", "size": 45}, {"text":"death", "size": 46}, {"text":"fucked", "size": 46}, {"text":"fly", "size": 46}, {"text":"top", "size": 46}, {"text":"block", "size": 46}, {"text":"people", "size": 46}, {"text":"cats", "size": 46}, {"text":"night", "size": 47}, {"text":"eyes", "size": 47}, {"text":"ma", "size": 47}, {"text":"open", "size": 47}, {"text":"everybody", "size": 47}, {"text":"glock", "size": 48}, {"text":"straight", "size": 48}, {"text":"step", "size": 48}, {"text":"lay", "size": 48}, {"text":"trying", "size": 48}, {"text":"dough", "size": 49}, {"text":"took", "size": 49}, {"text":"didn", "size": 49}, {"text":"york", "size": 49}, {"text":"white", "size": 50}, {"text":"hands", "size": 50}, {"text":"true", "size": 50}, {"text":"frank", "size": 51}, {"text":"squeeze", "size": 51}, {"text":"bout", "size": 51}, {"text":"kill", "size": 52}, {"text":"door", "size": 52}, {"text":"mean", "size": 52}, {"text":"crack", "size": 52}, {"text":"nasty", "size": 53}, {"text":"shots", "size": 53}, {"text":"poppa", "size": 53}, {"text":"pop", "size": 53}, {"text":"catch", "size": 53}, {"text":"mon", "size": 54}, {"text":"long", "size": 54}, {"text":"pain", "size": 54}, {"text":"left", "size": 54}, {"text":"seen", "size": 54}, {"text":"pass", "size": 55}, {"text":"heart", "size": 55}, {"text":"guns", "size": 55}, {"text":"blunts", "size": 56}, {"text":"ask", "size": 56}, {"text":"ha", "size": 57}, {"text":"things", "size": 57}, {"text":"mc", "size": 57}, {"text":"gat", "size": 57}, {"text":"pussy", "size": 57}, {"text":"hot", "size": 57}, {"text":"im", "size": 57}, {"text":"hand", "size": 57}, {"text":"til", "size": 58}, {"text":"shot", "size": 58}, {"text":"home", "size": 59}, {"text":"lil", "size": 59}, {"text":"rhyme", "size": 60}, {"text":"told", "size": 60}, {"text":"spit", "size": 60}, {"text":"god", "size": 61}, {"text":"hold", "size": 61}, {"text":"thought", "size": 61}, {"text":"ve", "size": 61}, {"text":"motherfuckin", "size": 61}, {"text":"mind", "size": 61}, {"text":"body", "size": 61}, {"text":"face", "size": 62}, {"text":"somethin", "size": 62}, {"text":"ghetto", "size": 62}, {"text":"chorus", "size": 62}, {"text":"talk", "size": 63}, {"text":"roll", "size": 63}, {"text":"ready", "size": 64}, {"text":"getting", "size": 64}, {"text":"beef", "size": 66}, {"text":"tryin", "size": 66}, {"text":"notorious", "size": 66}, {"text":"throw", "size": 67}, {"text":"mma", "size": 67}, {"text":"world", "size": 67}, {"text":"break", "size": 67}, {"text":"gon", "size": 67}, {"text":"turn", "size": 67}, {"text":"word", "size": 68}, {"text":"broke", "size": 68}, {"text":"rock", "size": 68}, {"text":"going", "size": 68}, {"text":"heard", "size": 69}, {"text":"bring", "size": 69}, {"text":"quick", "size": 70}, {"text":"style", "size": 70}, {"text":"blow", "size": 70}, {"text":"dead", "size": 70}, {"text":"hear", "size": 71}, {"text":"crew", "size": 71}, {"text":"hey", "size": 72}, {"text":"really", "size": 73}, {"text":"flow", "size": 73}, {"text":"drop", "size": 75}, {"text":"weed", "size": 76}, {"text":"stay", "size": 78}, {"text":"gettin", "size": 78}, {"text":"damn", "size": 78}, {"text":"try", "size": 78}, {"text":"show", "size": 78}, {"text":"motherfuckers", "size": 79}, {"text":"grab", "size": 80}, {"text":"leave", "size": 81}, {"text":"sick", "size": 82}, {"text":"smalls", "size": 83}, {"text":"house", "size": 83}, {"text":"boy", "size": 83}, {"text":"start", "size": 86}, {"text":"rap", "size": 86}, {"text":"bust", "size": 87}, {"text":"live", "size": 87}, {"text":"gun", "size": 88}, {"text":"gotta", "size": 89}, {"text":"high", "size": 89}, {"text":"watch", "size": 90}, {"text":"play", "size": 92}, {"text":"used", "size": 94}, {"text":"good", "size": 94}, {"text":"huh", "size": 95}, {"text":"check", "size": 95}, {"text":"won", "size": 95}, {"text":"brooklyn", "size": 95}, {"text":"smoke", "size": 95}, {"text":"motherfucker", "size": 99}, {"text":"little", "size": 101}, {"text":"fuckin", "size": 102}, {"text":"run", "size": 103}, {"text":"look", "size": 103}, {"text":"girl", "size": 103}, {"text":"oh", "size": 104}, {"text":"uhh", "size": 104}, {"text":"dick", "size": 105}, {"text":"need", "size": 105}, {"text":"hoes", "size": 105}, {"text":"fucking", "size": 106}, {"text":"head", "size": 112}, {"text":"bad", "size": 112}, {"text":"day", "size": 113}, {"text":"game", "size": 116}, {"text":"feel", "size": 117}, {"text":"wit", "size": 119}, {"text":"new", "size": 121}, {"text":"gonna", "size": 121}, {"text":"hard", "size": 123}, {"text":"die", "size": 124}, {"text":"said", "size": 126}, {"text":"think", "size": 132}, {"text":"better", "size": 134}, {"text":"black", "size": 135}, {"text":"right", "size": 136}, {"text":"stop", "size": 137}, {"text":"life", "size": 147}, {"text":"way", "size": 149}, {"text":"mad", "size": 151}, {"text":"uh", "size": 156}, {"text":"tell", "size": 157}, {"text":"say", "size": 158}, {"text":"baby", "size": 164}, {"text":"money", "size": 183}, {"text":"hit", "size": 187}, {"text":"come", "size": 193}, {"text":"ass", "size": 199}, {"text":"time", "size": 203}, {"text":"bitches", "size": 205}, {"text":"biggie", "size": 210}, {"text":"real", "size": 214}, {"text":"want", "size": 235}, {"text":"yeah", "size": 239}, {"text":"ll", "size": 247}, {"text":"let", "size": 258}, {"text":"bitch", "size": 265}, {"text":"love", "size": 265}, {"text":"yo", "size": 266}, {"text":"big", "size": 292}, {"text":"make", "size": 298}, {"text":"wanna", "size": 301}, {"text":"cause", "size": 348}, {"text":"man", "size": 360}, {"text":"just", "size": 391}, {"text":"ya", "size": 406}, {"text":"fuck", "size": 442}, {"text":"shit", "size": 586}, {"text":"know", "size": 588}, {"text":"nigga", "size": 688}, {"text":"niggas", "size": 743}],
    
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/13468817&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Busta Rhymes",
    x: 2195/3281,
    r: 322130/130000,
    id: "busta_rhymes",
    gender: "male",
    race: "black",
    unique_words: 2195,
    total_words: 322130,
    average_grade_level: 0.10,
    syllables_per_word: 1.38,
    one_syllable_words: 0.688,
    word_length: 3.7,
    testVar: 0.16,
    text: "crunk ain't dead",
    frequency: [
        
        {"text":"hop", "size": 111}, {"text":"gal", "size": 112}, {"text":"rep", "size": 112}, {"text":"sure", "size": 112}, {"text":"pussy", "size": 112}, {"text":"bad", "size": 113}, {"text":"light", "size": 113}, {"text":"movin", "size": 113}, {"text":"things", "size": 113}, {"text":"son", "size": 113}, {"text":"type", "size": 113}, {"text":"die", "size": 114}, {"text":"hand", "size": 115}, {"text":"round", "size": 115}, {"text":"catch", "size": 117}, {"text":"aiyyo", "size": 118}, {"text":"pull", "size": 118}, {"text":"flip", "size": 118}, {"text":"respect", "size": 118}, {"text":"city", "size": 119}, {"text":"ve", "size": 120}, {"text":"motherfuckers", "size": 120}, {"text":"act", "size": 120}, {"text":"heat", "size": 121}, {"text":"fucking", "size": 121}, {"text":"ride", "size": 122}, {"text":"goin", "size": 123}, {"text":"house", "size": 123}, {"text":"la", "size": 125}, {"text":"touch", "size": 125}, {"text":"yea", "size": 125}, {"text":"walk", "size": 127}, {"text":"bang", "size": 127}, {"text":"sound", "size": 127}, {"text":"fly", "size": 128}, {"text":"rhyme", "size": 129}, {"text":"fi", "size": 130}, {"text":"damn", "size": 130}, {"text":"dick", "size": 131}, {"text":"lookin", "size": 131}, {"text":"left", "size": 131}, {"text":"tryin", "size": 133}, {"text":"wild", "size": 133}, {"text":"sayin", "size": 134}, {"text":"till", "size": 137}, {"text":"york", "size": 137}, {"text":"gun", "size": 138}, {"text":"shot", "size": 139}, {"text":"dance", "size": 140}, {"text":"play", "size": 141}, {"text":"hah", "size": 143}, {"text":"makin", "size": 143}, {"text":"lot", "size": 143}, {"text":"top", "size": 146}, {"text":"step", "size": 147}, {"text":"remix", "size": 148}, {"text":"music", "size": 149}, {"text":"quick", "size": 149}, {"text":"straight", "size": 150}, {"text":"getting", "size": 151}, {"text":"break", "size": 152}, {"text":"long", "size": 152}, {"text":"listen", "size": 153}, {"text":"coming", "size": 155}, {"text":"comin", "size": 161}, {"text":"hard", "size": 163}, {"text":"streets", "size": 164}, {"text":"squad", "size": 165}, {"text":"mother", "size": 170}, {"text":"pass", "size": 171}, {"text":"kill", "size": 172}, {"text":"rap", "size": 174}, {"text":"night", "size": 174}, {"text":"shorty", "size": 175}, {"text":"mind", "size": 175}, {"text":"low", "size": 177}, {"text":"ohh", "size": 177}, {"text":"set", "size": 178}, {"text":"pop", "size": 178}, {"text":"spit", "size": 178}, {"text":"spot", "size": 179}, {"text":"club", "size": 179}, {"text":"ah", "size": 180}, {"text":"party", "size": 181}, {"text":"shake", "size": 182}, {"text":"chorus", "size": 184}, {"text":"word", "size": 184}, {"text":"best", "size": 185}, {"text":"hear", "size": 187}, {"text":"block", "size": 187}, {"text":"start", "size": 187}, {"text":"til", "size": 187}, {"text":"flow", "size": 188}, {"text":"yes", "size": 191}, {"text":"said", "size": 191}, {"text":"doin", "size": 192}, {"text":"world", "size": 192}, {"text":"face", "size": 193}, {"text":"da", "size": 193}, {"text":"high", "size": 196}, {"text":"game", "size": 196}, {"text":"roll", "size": 197}, {"text":"drop", "size": 197}, {"text":"place", "size": 197}, {"text":"leave", "size": 199}, {"text":"blow", "size": 199}, {"text":"jump", "size": 202}, {"text":"ready", "size": 203}, {"text":"day", "size": 205}, {"text":"hands", "size": 208}, {"text":"hood", "size": 212}, {"text":"boy", "size": 216}, {"text":"body", "size": 217}, {"text":"black", "size": 223}, {"text":"check", "size": 223}, {"text":"hold", "size": 224}, {"text":"huh", "size": 225}, {"text":"try", "size": 225}, {"text":"show", "size": 225}, {"text":"mma", "size": 226}, {"text":"life", "size": 227}, {"text":"street", "size": 234}, {"text":"gonna", "size": 235}, {"text":"throw", "size": 235}, {"text":"bout", "size": 237}, {"text":"everybody", "size": 239}, {"text":"beat", "size": 244}, {"text":"stay", "size": 244}, {"text":"bring", "size": 244}, {"text":"gettin", "size": 256}, {"text":"talk", "size": 257}, {"text":"bust", "size": 257}, {"text":"good", "size": 259}, {"text":"god", "size": 261}, {"text":"rock", "size": 263}, {"text":"head", "size": 270}, {"text":"bounce", "size": 275}, {"text":"gon", "size": 278}, {"text":"run", "size": 282}, {"text":"girl", "size": 283}, {"text":"live", "size": 288}, {"text":"turn", "size": 292}, {"text":"people", "size": 293}, {"text":"fuckin", "size": 294}, {"text":"bus", "size": 302}, {"text":"big", "size": 310}, {"text":"wit", "size": 317}, {"text":"think", "size": 328}, {"text":"dem", "size": 330}, {"text":"flipmode", "size": 332}, {"text":"gotta", "size": 334}, {"text":"yuh", "size": 335}, {"text":"mi", "size": 342}, {"text":"uh", "size": 343}, {"text":"feel", "size": 344}, {"text":"mon", "size": 347}, {"text":"hot", "size": 353}, {"text":"real", "size": 353}, {"text":"need", "size": 369}, {"text":"ha", "size": 372}, {"text":"hey", "size": 373}, {"text":"watch", "size": 377}, {"text":"tell", "size": 379}, {"text":"new", "size": 381}, {"text":"stop", "size": 385}, {"text":"look", "size": 393}, {"text":"really", "size": 394}, {"text":"little", "size": 398}, {"text":"better", "size": 405}, {"text":"di", "size": 406}, {"text":"bitches", "size": 413}, {"text":"hit", "size": 436}, {"text":"want", "size": 461}, {"text":"oh", "size": 499}, {"text":"say", "size": 502}, {"text":"rhymes", "size": 506}, {"text":"love", "size": 536}, {"text":"man", "size": 552}, {"text":"time", "size": 553}, {"text":"ass", "size": 558}, {"text":"baby", "size": 585}, {"text":"busta", "size": 624}, {"text":"right", "size": 631}, {"text":"bitch", "size": 637}, {"text":"cause", "size": 661}, {"text":"wanna", "size": 682}, {"text":"way", "size": 695}, {"text":"money", "size": 803}, {"text":"fuck", "size": 889}, {"text":"ya", "size": 896}, {"text":"let", "size": 1032}, {"text":"come", "size": 1077}, {"text":"make", "size": 1078}, {"text":"just", "size": 1136}, {"text":"yo", "size": 1225}, {"text":"yeah", "size": 1238}, {"text":"shit", "size": 1777}, {"text":"know", "size": 1822}, {"text":"nigga", "size": 1884}, {"text":"niggas", "size": 2482}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/125529024&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Common",
    x: 2255/3281,
    r: 153227/130000,
    id: "common",
    gender: "male",
    race: "black",
    unique_words: 2255,
    total_words: 153227,
    average_grade_level: 0.095,
    word_length: 3.8,
    syllables_per_word: 1.6,
    one_syllable_words: 0.578,
    testVar: 0.2,
    text: "white guy white",
    frequency: [
        {"text":"thinking", "size": 54}, {"text":"damn", "size": 54}, {"text":"write", "size": 55}, {"text":"kids", "size": 55}, {"text":"breathe", "size": 55}, {"text":"remember", "size": 55}, {"text":"gettin", "size": 55}, {"text":"coming", "size": 55}, {"text":"use", "size": 56}, {"text":"gone", "size": 56}, {"text":"hoes", "size": 56}, {"text":"tryna", "size": 56}, {"text":"brother", "size": 57}, {"text":"tried", "size": 57}, {"text":"best", "size": 57}, {"text":"til", "size": 58}, {"text":"corner", "size": 58}, {"text":"heaven", "size": 58}, {"text":"inside", "size": 59}, {"text":"story", "size": 59}, {"text":"hustle", "size": 59}, {"text":"leave", "size": 59}, {"text":"feelin", "size": 59}, {"text":"side", "size": 60}, {"text":"end", "size": 60}, {"text":"couldn", "size": 60}, {"text":"words", "size": 61}, {"text":"da", "size": 61}, {"text":"wasn", "size": 61}, {"text":"lost", "size": 62}, {"text":"mon", "size": 62}, {"text":"bird", "size": 62}, {"text":"start", "size": 62}, {"text":"type", "size": 63}, {"text":"pain", "size": 63}, {"text":"true", "size": 63}, {"text":"party", "size": 63}, {"text":"heard", "size": 63}, {"text":"die", "size": 64}, {"text":"top", "size": 64}, {"text":"street", "size": 64}, {"text":"place", "size": 64}, {"text":"head", "size": 65}, {"text":"state", "size": 65}, {"text":"deep", "size": 65}, {"text":"didn", "size": 65}, {"text":"work", "size": 65}, {"text":"turn", "size": 65}, {"text":"watch", "size": 66}, {"text":"flow", "size": 66}, {"text":"ghetto", "size": 66}, {"text":"young", "size": 66}, {"text":"lot", "size": 66}, {"text":"pop", "size": 67}, {"text":"stand", "size": 67}, {"text":"chicago", "size": 67}, {"text":"won", "size": 68}, {"text":"tryin", "size": 68}, {"text":"dreams", "size": 68}, {"text":"white", "size": 68}, {"text":"questions", "size": 68}, {"text":"far", "size": 68}, {"text":"yes", "size": 69}, {"text":"mc", "size": 69}, {"text":"cuz", "size": 70}, {"text":"hood", "size": 70}, {"text":"hear", "size": 70}, {"text":"bring", "size": 70}, {"text":"pretty", "size": 70}, {"text":"beat", "size": 70}, {"text":"bad", "size": 70}, {"text":"town", "size": 70}, {"text":"body", "size": 71}, {"text":"hey", "size": 72}, {"text":"knew", "size": 73}, {"text":"times", "size": 74}, {"text":"days", "size": 75}, {"text":"dream", "size": 75}, {"text":"chi", "size": 75}, {"text":"truth", "size": 75}, {"text":"believe", "size": 76}, {"text":"cold", "size": 76}, {"text":"house", "size": 76}, {"text":"wit", "size": 77}, {"text":"went", "size": 77}, {"text":"fight", "size": 77}, {"text":"everybody", "size": 78}, {"text":"going", "size": 78}, {"text":"la", "size": 78}, {"text":"free", "size": 79}, {"text":"heart", "size": 79}, {"text":"style", "size": 80}, {"text":"getting", "size": 80}, {"text":"fly", "size": 81}, {"text":"mic", "size": 82}, {"text":"forever", "size": 82}, {"text":"bout", "size": 84}, {"text":"friends", "size": 85}, {"text":"peace", "size": 86}, {"text":"long", "size": 86}, {"text":"seen", "size": 86}, {"text":"thought", "size": 86}, {"text":"try", "size": 87}, {"text":"boy", "size": 87}, {"text":"mma", "size": 87}, {"text":"hot", "size": 88}, {"text":"ho", "size": 89}, {"text":"talk", "size": 91}, {"text":"old", "size": 91}, {"text":"break", "size": 91}, {"text":"home", "size": 91}, {"text":"change", "size": 91}, {"text":"dance", "size": 93}, {"text":"away", "size": 94}, {"text":"trying", "size": 95}, {"text":"rhyme", "size": 95}, {"text":"light", "size": 95}, {"text":"run", "size": 96}, {"text":"eyes", "size": 96}, {"text":"ah", "size": 96}, {"text":"show", "size": 96}, {"text":"walk", "size": 96}, {"text":"bitch", "size": 96}, {"text":"really", "size": 96}, {"text":"soul", "size": 97}, {"text":"hit", "size": 98}, {"text":"big", "size": 102}, {"text":"high", "size": 106}, {"text":"hold", "size": 108}, {"text":"city", "size": 108}, {"text":"streets", "size": 110}, {"text":"look", "size": 110}, {"text":"ass", "size": 112}, {"text":"com", "size": 112}, {"text":"little", "size": 115}, {"text":"things", "size": 115}, {"text":"music", "size": 116}, {"text":"told", "size": 117}, {"text":"think", "size": 118}, {"text":"hip", "size": 118}, {"text":"stop", "size": 120}, {"text":"night", "size": 121}, {"text":"gon", "size": 121}, {"text":"used", "size": 124}, {"text":"play", "size": 127}, {"text":"came", "size": 134}, {"text":"hop", "size": 136}, {"text":"money", "size": 137}, {"text":"gonna", "size": 138}, {"text":"fuck", "size": 141}, {"text":"sense", "size": 145}, {"text":"ve", "size": 148}, {"text":"girl", "size": 148}, {"text":"rock", "size": 148}, {"text":"better", "size": 150}, {"text":"check", "size": 150}, {"text":"stay", "size": 150}, {"text":"game", "size": 151}, {"text":"new", "size": 155}, {"text":"oh", "size": 155}, {"text":"rap", "size": 160}, {"text":"live", "size": 161}, {"text":"need", "size": 163}, {"text":"baby", "size": 167}, {"text":"hard", "size": 169}, {"text":"tell", "size": 174}, {"text":"people", "size": 175}, {"text":"day", "size": 179}, {"text":"mind", "size": 179}, {"text":"ya", "size": 179}, {"text":"feel", "size": 179}, {"text":"god", "size": 183}, {"text":"world", "size": 185}, {"text":"real", "size": 188}, {"text":"good", "size": 192}, {"text":"uh", "size": 192}, {"text":"wanna", "size": 195}, {"text":"common", "size": 201}, {"text":"way", "size": 211}, {"text":"black", "size": 219}, {"text":"said", "size": 221}, {"text":"gotta", "size": 239}, {"text":"right", "size": 240}, {"text":"nigga", "size": 317}, {"text":"let", "size": 318}, {"text":"make", "size": 319}, {"text":"want", "size": 331}, {"text":"time", "size": 341}, {"text":"shit", "size": 345}, {"text":"come", "size": 353}, {"text":"life", "size": 375}, {"text":"cause", "size": 384}, {"text":"yeah", "size": 385}, {"text":"say", "size": 389}, {"text":"niggas", "size": 399}, {"text":"man", "size": 422}, {"text":"love", "size": 446}, {"text":"yo", "size": 459}, {"text":"just", "size": 561}, {"text":"know", "size": 690}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/118917831&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"

},
{
    name: "Dead Prez",
    x: 2236/3281,
    r: 61664/130000,
    id: "dead_prez",
    gender: "male",
    race: "black",
    unique_words: 2236,
    total_words: 61664,
    average_grade_level: 0.124,
    word_length: 3.8,
    syllables_per_word: 1.41,
    one_syllable_words: 0.694,
    sentiment: -0.25,
    testVar: 0.21,
    text: "badonka donk donk",
    frequency: [
        {"text":"locked", "size": 22}, {"text":"walk", "size": 22}, {"text":"born", "size": 22}, {"text":"dedicated", "size": 22}, {"text":"hit", "size": 23}, {"text":"homie", "size": 23}, {"text":"prez", "size": 23}, {"text":"goin", "size": 23}, {"text":"caught", "size": 23}, {"text":"african", "size": 23}, {"text":"true", "size": 23}, {"text":"hate", "size": 23}, {"text":"today", "size": 23}, {"text":"everyday", "size": 23}, {"text":"lot", "size": 23}, {"text":"brother", "size": 24}, {"text":"away", "size": 24}, {"text":"green", "size": 24}, {"text":"control", "size": 24}, {"text":"win", "size": 24}, {"text":"rbg", "size": 24}, {"text":"inside", "size": 24}, {"text":"won", "size": 24}, {"text":"set", "size": 24}, {"text":"somebody", "size": 25}, {"text":"hands", "size": 25}, {"text":"bring", "size": 25}, {"text":"place", "size": 25}, {"text":"straight", "size": 25}, {"text":"ass", "size": 25}, {"text":"slave", "size": 25}, {"text":"talk", "size": 25}, {"text":"lies", "size": 26}, {"text":"fake", "size": 26}, {"text":"side", "size": 26}, {"text":"state", "size": 26}, {"text":"everybody", "size": 26}, {"text":"nation", "size": 26}, {"text":"kill", "size": 26}, {"text":"pop", "size": 26}, {"text":"gangsta", "size": 26}, {"text":"huey", "size": 26}, {"text":"dp", "size": 26}, {"text":"care", "size": 26}, {"text":"times", "size": 26}, {"text":"government", "size": 26}, {"text":"evil", "size": 26}, {"text":"sexy", "size": 26}, {"text":"seen", "size": 26}, {"text":"hot", "size": 27}, {"text":"years", "size": 27}, {"text":"bang", "size": 27}, {"text":"bullshit", "size": 27}, {"text":"said", "size": 27}, {"text":"eyes", "size": 27}, {"text":"best", "size": 27}, {"text":"push", "size": 27}, {"text":"stic", "size": 27}, {"text":"revolutionary", "size": 28}, {"text":"malcolm", "size": 28}, {"text":"poor", "size": 28}, {"text":"food", "size": 28}, {"text":"came", "size": 29}, {"text":"house", "size": 29}, {"text":"hope", "size": 29}, {"text":"ghetto", "size": 29}, {"text":"stand", "size": 29}, {"text":"play", "size": 29}, {"text":"smoke", "size": 29}, {"text":"til", "size": 30}, {"text":"livin", "size": 30}, {"text":"start", "size": 30}, {"text":"revolution", "size": 30}, {"text":"ve", "size": 30}, {"text":"long", "size": 30}, {"text":"little", "size": 31}, {"text":"going", "size": 31}, {"text":"future", "size": 31}, {"text":"hear", "size": 31}, {"text":"burn", "size": 31}, {"text":"try", "size": 32}, {"text":"watch", "size": 32}, {"text":"army", "size": 32}, {"text":"show", "size": 32}, {"text":"run", "size": 32}, {"text":"street", "size": 32}, {"text":"face", "size": 33}, {"text":"mean", "size": 33}, {"text":"baby", "size": 33}, {"text":"break", "size": 33}, {"text":"coming", "size": 33}, {"text":"self", "size": 33}, {"text":"roll", "size": 33}, {"text":"bigger", "size": 34}, {"text":"blood", "size": 34}, {"text":"truth", "size": 34}, {"text":"young", "size": 34}, {"text":"po", "size": 34}, {"text":"new", "size": 35}, {"text":"chorus", "size": 35}, {"text":"heart", "size": 35}, {"text":"cop", "size": 35}, {"text":"foreva", "size": 35}, {"text":"living", "size": 36}, {"text":"shot", "size": 36}, {"text":"crack", "size": 36}, {"text":"enemy", "size": 36}, {"text":"soldiers", "size": 37}, {"text":"trying", "size": 37}, {"text":"cash", "size": 37}, {"text":"hand", "size": 37}, {"text":"fo", "size": 38}, {"text":"work", "size": 39}, {"text":"nothin", "size": 39}, {"text":"gun", "size": 40}, {"text":"hood", "size": 40}, {"text":"head", "size": 40}, {"text":"obama", "size": 41}, {"text":"word", "size": 41}, {"text":"things", "size": 41}, {"text":"eat", "size": 42}, {"text":"fight", "size": 42}, {"text":"dope", "size": 42}, {"text":"getting", "size": 42}, {"text":"tryin", "size": 43}, {"text":"son", "size": 44}, {"text":"hard", "size": 45}, {"text":"really", "size": 45}, {"text":"sell", "size": 45}, {"text":"god", "size": 45}, {"text":"streets", "size": 45}, {"text":"radio", "size": 46}, {"text":"cuz", "size": 46}, {"text":"good", "size": 47}, {"text":"die", "size": 47}, {"text":"stay", "size": 47}, {"text":"struggle", "size": 48}, {"text":"dead", "size": 48}, {"text":"believe", "size": 51}, {"text":"block", "size": 51}, {"text":"soldier", "size": 53}, {"text":"need", "size": 53}, {"text":"uh", "size": 55}, {"text":"police", "size": 55}, {"text":"hold", "size": 56}, {"text":"hell", "size": 56}, {"text":"club", "size": 56}, {"text":"big", "size": 57}, {"text":"better", "size": 59}, {"text":"stop", "size": 61}, {"text":"bout", "size": 61}, {"text":"mind", "size": 63}, {"text":"change", "size": 63}, {"text":"power", "size": 63}, {"text":"free", "size": 64}, {"text":"tell", "size": 64}, {"text":"look", "size": 64}, {"text":"gonna", "size": 69}, {"text":"feel", "size": 71}, {"text":"white", "size": 71}, {"text":"day", "size": 72}, {"text":"think", "size": 72}, {"text":"turn", "size": 72}, {"text":"money", "size": 73}, {"text":"ride", "size": 76}, {"text":"want", "size": 77}, {"text":"come", "size": 77}, {"text":"game", "size": 77}, {"text":"love", "size": 80}, {"text":"hop", "size": 85}, {"text":"gon", "size": 86}, {"text":"ready", "size": 91}, {"text":"real", "size": 91}, {"text":"ya", "size": 93}, {"text":"live", "size": 93}, {"text":"hip", "size": 94}, {"text":"way", "size": 96}, {"text":"war", "size": 100}, {"text":"let", "size": 107}, {"text":"wanna", "size": 109}, {"text":"yo", "size": 110}, {"text":"yeah", "size": 111}, {"text":"fuck", "size": 112}, {"text":"say", "size": 113}, {"text":"world", "size": 114}, {"text":"gotta", "size": 124}, {"text":"make", "size": 125}, {"text":"freedom", "size": 130}, {"text":"cause", "size": 133}, {"text":"man", "size": 134}, {"text":"black", "size": 142}, {"text":"right", "size": 145}, {"text":"time", "size": 158}, {"text":"nigga", "size": 161}, {"text":"people", "size": 175}, {"text":"shit", "size": 179}, {"text":"niggas", "size": 184}, {"text":"life", "size": 214}, {"text":"just", "size": 227}, {"text":"know", "size": 296}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/48766199&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},

{
    name: "Diddy",
    x: 1688/3281,
    r: 221577/130000,
    id: "diddy",
    gender: "male",
    race: "black",
    unique_words: 1688,
    total_words: 221577,
    average_grade_level: 0.074,
    word_length: 3.5,
    syllables_per_word: 1.31,
    one_syllable_words: 0.734,
    testVar: 0.21,
    text: "badonka donk donk",
    frequency: [
        {"text":"kiss", "size": 73}, {"text":"block", "size": 73}, {"text":"side", "size": 73}, {"text":"dick", "size": 73}, {"text":"walk", "size": 73}, {"text":"getting", "size": 74}, {"text":"door", "size": 74}, {"text":"pay", "size": 74}, {"text":"true", "size": 76}, {"text":"goes", "size": 76}, {"text":"coming", "size": 77}, {"text":"ladies", "size": 77}, {"text":"straight", "size": 77}, {"text":"cash", "size": 77}, {"text":"paper", "size": 77}, {"text":"feelin", "size": 77}, {"text":"flow", "size": 78}, {"text":"light", "size": 78}, {"text":"gun", "size": 78}, {"text":"tonight", "size": 79}, {"text":"took", "size": 79}, {"text":"jump", "size": 81}, {"text":"touch", "size": 81}, {"text":"hello", "size": 81}, {"text":"break", "size": 81}, {"text":"throw", "size": 82}, {"text":"comin", "size": 82}, {"text":"used", "size": 82}, {"text":"floor", "size": 83}, {"text":"car", "size": 83}, {"text":"red", "size": 83}, {"text":"uhh", "size": 83}, {"text":"da", "size": 83}, {"text":"young", "size": 84}, {"text":"people", "size": 84}, {"text":"white", "size": 85}, {"text":"cats", "size": 86}, {"text":"hood", "size": 87}, {"text":"left", "size": 88}, {"text":"dough", "size": 88}, {"text":"city", "size": 88}, {"text":"ask", "size": 89}, {"text":"lookin", "size": 89}, {"text":"somethin", "size": 90}, {"text":"believe", "size": 92}, {"text":"low", "size": 92}, {"text":"face", "size": 93}, {"text":"ho", "size": 93}, {"text":"goin", "size": 94}, {"text":"rap", "size": 94}, {"text":"motherfucker", "size": 94}, {"text":"roll", "size": 94}, {"text":"house", "size": 95}, {"text":"til", "size": 96}, {"text":"ready", "size": 97}, {"text":"shake", "size": 98}, {"text":"boys", "size": 99}, {"text":"ha", "size": 101}, {"text":"cuz", "size": 101}, {"text":"till", "size": 101}, {"text":"motherfuckin", "size": 102}, {"text":"heard", "size": 102}, {"text":"fuckin", "size": 102}, {"text":"start", "size": 102}, {"text":"came", "size": 104}, {"text":"pop", "size": 104}, {"text":"high", "size": 105}, {"text":"dance", "size": 105}, {"text":"girls", "size": 106}, {"text":"pain", "size": 107}, {"text":"blow", "size": 107}, {"text":"verse", "size": 107}, {"text":"everybody", "size": 108}, {"text":"beat", "size": 108}, {"text":"best", "size": 108}, {"text":"gone", "size": 110}, {"text":"mase", "size": 110}, {"text":"god", "size": 111}, {"text":"going", "size": 111}, {"text":"nothin", "size": 112}, {"text":"lil", "size": 112}, {"text":"club", "size": 113}, {"text":"talkin", "size": 114}, {"text":"seen", "size": 116}, {"text":"hoes", "size": 116}, {"text":"home", "size": 117}, {"text":"mean", "size": 117}, {"text":"hands", "size": 118}, {"text":"ma", "size": 119}, {"text":"away", "size": 121}, {"text":"body", "size": 121}, {"text":"die", "size": 122}, {"text":"mad", "size": 123}, {"text":"eyes", "size": 125}, {"text":"la", "size": 126}, {"text":"tryin", "size": 126}, {"text":"top", "size": 128}, {"text":"try", "size": 128}, {"text":"fly", "size": 130}, {"text":"watch", "size": 130}, {"text":"hate", "size": 131}, {"text":"lot", "size": 134}, {"text":"stay", "size": 136}, {"text":"run", "size": 136}, {"text":"heart", "size": 137}, {"text":"thought", "size": 138}, {"text":"party", "size": 138}, {"text":"live", "size": 139}, {"text":"mind", "size": 139}, {"text":"hey", "size": 141}, {"text":"leave", "size": 141}, {"text":"told", "size": 144}, {"text":"damn", "size": 145}, {"text":"things", "size": 147}, {"text":"bring", "size": 150}, {"text":"repeat", "size": 151}, {"text":"remix", "size": 151}, {"text":"drop", "size": 151}, {"text":"gettin", "size": 155}, {"text":"check", "size": 157}, {"text":"hear", "size": 159}, {"text":"little", "size": 160}, {"text":"daddy", "size": 161}, {"text":"chorus", "size": 162}, {"text":"talk", "size": 166}, {"text":"night", "size": 166}, {"text":"work", "size": 167}, {"text":"play", "size": 169}, {"text":"head", "size": 171}, {"text":"mma", "size": 171}, {"text":"bitches", "size": 174}, {"text":"long", "size": 174}, {"text":"black", "size": 174}, {"text":"really", "size": 177}, {"text":"hard", "size": 178}, {"text":"bout", "size": 186}, {"text":"turn", "size": 186}, {"text":"look", "size": 186}, {"text":"ass", "size": 187}, {"text":"gon", "size": 199}, {"text":"day", "size": 199}, {"text":"game", "size": 200}, {"text":"ride", "size": 202}, {"text":"better", "size": 203}, {"text":"crazy", "size": 205}, {"text":"world", "size": 207}, {"text":"show", "size": 208}, {"text":"rock", "size": 211}, {"text":"puff", "size": 213}, {"text":"new", "size": 217}, {"text":"gonna", "size": 219}, {"text":"said", "size": 221}, {"text":"huh", "size": 222}, {"text":"wit", "size": 223}, {"text":"won", "size": 228}, {"text":"good", "size": 229}, {"text":"gotta", "size": 232}, {"text":"ve", "size": 232}, {"text":"mon", "size": 243}, {"text":"diddy", "size": 244}, {"text":"hold", "size": 246}, {"text":"hot", "size": 255}, {"text":"hit", "size": 257}, {"text":"think", "size": 258}, {"text":"big", "size": 282}, {"text":"feel", "size": 304}, {"text":"real", "size": 305}, {"text":"life", "size": 328}, {"text":"way", "size": 365}, {"text":"tell", "size": 376}, {"text":"time", "size": 385}, {"text":"say", "size": 388}, {"text":"bitch", "size": 448}, {"text":"stop", "size": 453}, {"text":"fuck", "size": 456}, {"text":"need", "size": 471}, {"text":"man", "size": 473}, {"text":"cause", "size": 473}, {"text":"want", "size": 479}, {"text":"uh", "size": 479}, {"text":"bad", "size": 498}, {"text":"right", "size": 499}, {"text":"girl", "size": 531}, {"text":"boy", "size": 545}, {"text":"yo", "size": 585}, {"text":"oh", "size": 594}, {"text":"come", "size": 605}, {"text":"wanna", "size": 632}, {"text":"ya", "size": 639}, {"text":"baby", "size": 647}, {"text":"money", "size": 711}, {"text":"make", "size": 712}, {"text":"love", "size": 718}, {"text":"niggas", "size": 801}, {"text":"let", "size": 806}, {"text":"just", "size": 810}, {"text":"shit", "size": 810}, {"text":"nigga", "size": 904}, {"text":"yeah", "size": 997}, {"text":"know", "size": 1289}
        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1057528&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},

{
    name: "Drake",
    x: 1880/3281,
    r: 238181/130000,
    id: "drake",
    gender: "male",
    race: "mixed",
    unique_words: 1880,
    total_words: 238181,
    average_grade_level: 0.11,
    word_length: 3.6,
    syllables_per_word: 1.38,
    one_syllable_words: 0.691,
    sentiment: -0.25,
    testVar: 0.21,
    text: "badonka donk donk",
    frequency: [
        {"text":"ones", "size": 75}, {"text":"goin", "size": 76}, {"text":"god", "size": 76}, {"text":"bet", "size": 77}, {"text":"talkin", "size": 78}, {"text":"left", "size": 78}, {"text":"thats", "size": 78}, {"text":"cut", "size": 79}, {"text":"start", "size": 79}, {"text":"rappers", "size": 79}, {"text":"goes", "size": 80}, {"text":"brand", "size": 80}, {"text":"ho", "size": 80}, {"text":"low", "size": 80}, {"text":"kill", "size": 81}, {"text":"lights", "size": 81}, {"text":"forget", "size": 82}, {"text":"morning", "size": 82}, {"text":"listen", "size": 83}, {"text":"forever", "size": 83}, {"text":"yes", "size": 83}, {"text":"haters", "size": 84}, {"text":"pay", "size": 84}, {"text":"went", "size": 84}, {"text":"hey", "size": 84}, {"text":"heard", "size": 85}, {"text":"sound", "size": 85}, {"text":"remember", "size": 85}, {"text":"wait", "size": 86}, {"text":"past", "size": 86}, {"text":"rap", "size": 86}, {"text":"slow", "size": 87}, {"text":"everybody", "size": 87}, {"text":"break", "size": 87}, {"text":"coming", "size": 87}, {"text":"care", "size": 88}, {"text":"beat", "size": 88}, {"text":"wish", "size": 88}, {"text":"room", "size": 89}, {"text":"miss", "size": 89}, {"text":"thought", "size": 90}, {"text":"cuz", "size": 90}, {"text":"white", "size": 91}, {"text":"black", "size": 91}, {"text":"end", "size": 91}, {"text":"took", "size": 92}, {"text":"days", "size": 92}, {"text":"making", "size": 93}, {"text":"drizzy", "size": 95}, {"text":"believe", "size": 95}, {"text":"crazy", "size": 96}, {"text":"til", "size": 96}, {"text":"type", "size": 96}, {"text":"grindin", "size": 96}, {"text":"dont", "size": 97}, {"text":"somebody", "size": 99}, {"text":"check", "size": 100}, {"text":"cash", "size": 101}, {"text":"throw", "size": 102}, {"text":"face", "size": 102}, {"text":"heart", "size": 103}, {"text":"drop", "size": 104}, {"text":"change", "size": 104}, {"text":"away", "size": 105}, {"text":"fall", "size": 105}, {"text":"tonight", "size": 106}, {"text":"year", "size": 106}, {"text":"verse", "size": 107}, {"text":"song", "size": 108}, {"text":"fly", "size": 108}, {"text":"hoes", "size": 109}, {"text":"sure", "size": 109}, {"text":"light", "size": 109}, {"text":"doing", "size": 110}, {"text":"hold", "size": 112}, {"text":"looking", "size": 112}, {"text":"old", "size": 112}, {"text":"head", "size": 112}, {"text":"flow", "size": 113}, {"text":"work", "size": 113}, {"text":"club", "size": 113}, {"text":"couple", "size": 115}, {"text":"probably", "size": 115}, {"text":"ready", "size": 116}, {"text":"maybe", "size": 116}, {"text":"gettin", "size": 116}, {"text":"hope", "size": 117}, {"text":"high", "size": 118}, {"text":"talking", "size": 119}, {"text":"gone", "size": 120}, {"text":"trying", "size": 121}, {"text":"wrong", "size": 122}, {"text":"house", "size": 124}, {"text":"hear", "size": 124}, {"text":"feeling", "size": 125}, {"text":"watch", "size": 126}, {"text":"leave", "size": 127}, {"text":"team", "size": 129}, {"text":"play", "size": 130}, {"text":"pop", "size": 132}, {"text":"turn", "size": 132}, {"text":"lot", "size": 133}, {"text":"bring", "size": 133}, {"text":"mind", "size": 133}, {"text":"used", "size": 133}, {"text":"top", "size": 136}, {"text":"run", "size": 138}, {"text":"stop", "size": 141}, {"text":"friends", "size": 143}, {"text":"ask", "size": 146}, {"text":"pussy", "size": 146}, {"text":"world", "size": 147}, {"text":"guess", "size": 147}, {"text":"talk", "size": 148}, {"text":"little", "size": 148}, {"text":"swear", "size": 150}, {"text":"yo", "size": 151}, {"text":"came", "size": 154}, {"text":"try", "size": 156}, {"text":"women", "size": 158}, {"text":"hard", "size": 159}, {"text":"won", "size": 159}, {"text":"live", "size": 160}, {"text":"people", "size": 162}, {"text":"mean", "size": 162}, {"text":"fuckin", "size": 163}, {"text":"hate", "size": 164}, {"text":"gon", "size": 167}, {"text":"stay", "size": 171}, {"text":"best", "size": 172}, {"text":"gonna", "size": 172}, {"text":"home", "size": 174}, {"text":"bad", "size": 176}, {"text":"mma", "size": 179}, {"text":"getting", "size": 183}, {"text":"started", "size": 183}, {"text":"long", "size": 184}, {"text":"big", "size": 189}, {"text":"going", "size": 192}, {"text":"day", "size": 193}, {"text":"things", "size": 193}, {"text":"show", "size": 194}, {"text":"tryna", "size": 198}, {"text":"ass", "size": 202}, {"text":"told", "size": 205}, {"text":"city", "size": 206}, {"text":"damn", "size": 206}, {"text":"better", "size": 208}, {"text":"hit", "size": 208}, {"text":"fucking", "size": 209}, {"text":"game", "size": 209}, {"text":"girls", "size": 214}, {"text":"night", "size": 217}, {"text":"music", "size": 218}, {"text":"drake", "size": 227}, {"text":"versace", "size": 232}, {"text":"im", "size": 233}, {"text":"boy", "size": 243}, {"text":"gotta", "size": 248}, {"text":"oh", "size": 253}, {"text":"uh", "size": 257}, {"text":"said", "size": 268}, {"text":"young", "size": 271}, {"text":"bitches", "size": 275}, {"text":"way", "size": 279}, {"text":"bout", "size": 296}, {"text":"come", "size": 304}, {"text":"look", "size": 308}, {"text":"really", "size": 315}, {"text":"feel", "size": 334}, {"text":"real", "size": 334}, {"text":"life", "size": 343}, {"text":"ve", "size": 352}, {"text":"think", "size": 356}, {"text":"good", "size": 362}, {"text":"new", "size": 383}, {"text":"want", "size": 396}, {"text":"need", "size": 399}, {"text":"bitch", "size": 428}, {"text":"ya", "size": 441}, {"text":"wanna", "size": 447}, {"text":"baby", "size": 500}, {"text":"let", "size": 528}, {"text":"right", "size": 564}, {"text":"man", "size": 579}, {"text":"time", "size": 580}, {"text":"tell", "size": 597}, {"text":"fuck", "size": 623}, {"text":"make", "size": 625}, {"text":"love", "size": 631}, {"text":"money", "size": 673}, {"text":"say", "size": 686}, {"text":"yeah", "size": 703}, {"text":"niggas", "size": 713}, {"text":"cause", "size": 746}, {"text":"girl", "size": 771}, {"text":"shit", "size": 952}, {"text":"nigga", "size": 1004}, {"text":"know", "size": 1545}, {"text":"just", "size": 1681}
        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/77472052&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Eminem",
    x: 1773/3281,
    r: 441080/130000,
    id: "eminem",
    gender: "male",
    race: "white",
    unique_words: 1773,
    total_words: 441080,
    average_grade_level: 0.115,
    word_length: 3.7,
    syllables_per_word: 1.38,
    one_syllable_words: 0.697,
    sentiment: -0.25,
    testVar: 0.21,
    text: "badonka donk donk",
    frequency: [
        {"text":"crack", "size": 141}, {"text":"pac", "size": 141}, {"text":"mother", "size": 141}, {"text":"stick", "size": 141}, {"text":"hand", "size": 142}, {"text":"talking", "size": 142}, {"text":"hope", "size": 142}, {"text":"comes", "size": 144}, {"text":"heard", "size": 144}, {"text":"block", "size": 145}, {"text":"seen", "size": 145}, {"text":"blood", "size": 146}, {"text":"hoes", "size": 146}, {"text":"gone", "size": 146}, {"text":"hip", "size": 146}, {"text":"la", "size": 146}, {"text":"smoke", "size": 146}, {"text":"obie", "size": 147}, {"text":"believe", "size": 147}, {"text":"broke", "size": 148}, {"text":"fight", "size": 149}, {"text":"things", "size": 149}, {"text":"rhyme", "size": 149}, {"text":"eat", "size": 149}, {"text":"brain", "size": 150}, {"text":"bring", "size": 150}, {"text":"wrong", "size": 151}, {"text":"saying", "size": 152}, {"text":"straight", "size": 152}, {"text":"sit", "size": 152}, {"text":"ready", "size": 152}, {"text":"stand", "size": 153}, {"text":"wait", "size": 153}, {"text":"cold", "size": 155}, {"text":"car", "size": 155}, {"text":"drop", "size": 156}, {"text":"roll", "size": 156}, {"text":"till", "size": 157}, {"text":"cut", "size": 157}, {"text":"pop", "size": 157}, {"text":"hop", "size": 158}, {"text":"wouldn", "size": 158}, {"text":"motherfuckers", "size": 158}, {"text":"ho", "size": 159}, {"text":"act", "size": 159}, {"text":"motherfucker", "size": 159}, {"text":"mom", "size": 160}, {"text":"song", "size": 161}, {"text":"words", "size": 161}, {"text":"rappers", "size": 161}, {"text":"uh", "size": 163}, {"text":"wit", "size": 164}, {"text":"kids", "size": 166}, {"text":"goes", "size": 166}, {"text":"fucked", "size": 167}, {"text":"looking", "size": 167}, {"text":"went", "size": 169}, {"text":"place", "size": 169}, {"text":"hey", "size": 170}, {"text":"walk", "size": 171}, {"text":"top", "size": 171}, {"text":"hot", "size": 171}, {"text":"kid", "size": 172}, {"text":"ask", "size": 175}, {"text":"used", "size": 175}, {"text":"inside", "size": 176}, {"text":"matter", "size": 176}, {"text":"gun", "size": 177}, {"text":"mic", "size": 178}, {"text":"mad", "size": 181}, {"text":"dead", "size": 183}, {"text":"coming", "size": 184}, {"text":"doing", "size": 187}, {"text":"pull", "size": 187}, {"text":"throw", "size": 193}, {"text":"mouth", "size": 193}, {"text":"im", "size": 194}, {"text":"rock", "size": 194}, {"text":"maybe", "size": 195}, {"text":"watch", "size": 196}, {"text":"black", "size": 197}, {"text":"mean", "size": 197}, {"text":"thought", "size": 198}, {"text":"stay", "size": 198}, {"text":"old", "size": 200}, {"text":"night", "size": 202}, {"text":"blow", "size": 202}, {"text":"hold", "size": 202}, {"text":"end", "size": 203}, {"text":"da", "size": 203}, {"text":"spit", "size": 204}, {"text":"long", "size": 208}, {"text":"best", "size": 210}, {"text":"probably", "size": 212}, {"text":"shot", "size": 212}, {"text":"getting", "size": 213}, {"text":"didn", "size": 214}, {"text":"high", "size": 216}, {"text":"home", "size": 216}, {"text":"hell", "size": 217}, {"text":"dre", "size": 218}, {"text":"play", "size": 221}, {"text":"bitches", "size": 224}, {"text":"came", "size": 225}, {"text":"talk", "size": 225}, {"text":"bout", "size": 227}, {"text":"left", "size": 227}, {"text":"mind", "size": 227}, {"text":"start", "size": 227}, {"text":"live", "size": 229}, {"text":"away", "size": 229}, {"text":"hard", "size": 231}, {"text":"told", "size": 232}, {"text":"damn", "size": 238}, {"text":"kill", "size": 240}, {"text":"house", "size": 241}, {"text":"real", "size": 244}, {"text":"turn", "size": 246}, {"text":"guess", "size": 251}, {"text":"gon", "size": 252}, {"text":"boy", "size": 253}, {"text":"everybody", "size": 254}, {"text":"sick", "size": 255}, {"text":"hate", "size": 258}, {"text":"die", "size": 258}, {"text":"ha", "size": 259}, {"text":"really", "size": 260}, {"text":"money", "size": 260}, {"text":"god", "size": 261}, {"text":"eminem", "size": 264}, {"text":"slim", "size": 267}, {"text":"crazy", "size": 271}, {"text":"bad", "size": 275}, {"text":"run", "size": 276}, {"text":"good", "size": 276}, {"text":"show", "size": 280}, {"text":"big", "size": 287}, {"text":"going", "size": 287}, {"text":"trying", "size": 294}, {"text":"people", "size": 300}, {"text":"beat", "size": 302}, {"text":"hear", "size": 303}, {"text":"stop", "size": 308}, {"text":"leave", "size": 310}, {"text":"new", "size": 321}, {"text":"dick", "size": 323}, {"text":"face", "size": 324}, {"text":"world", "size": 324}, {"text":"til", "size": 334}, {"text":"music", "size": 339}, {"text":"girl", "size": 342}, {"text":"mma", "size": 342}, {"text":"game", "size": 344}, {"text":"head", "size": 348}, {"text":"fuckin", "size": 364}, {"text":"gotta", "size": 365}, {"text":"won", "size": 374}, {"text":"white", "size": 377}, {"text":"try", "size": 379}, {"text":"day", "size": 402}, {"text":"said", "size": 418}, {"text":"baby", "size": 430}, {"text":"hit", "size": 431}, {"text":"feel", "size": 431}, {"text":"ve", "size": 435}, {"text":"better", "size": 440}, {"text":"gonna", "size": 443}, {"text":"rap", "size": 453}, {"text":"tell", "size": 458}, {"text":"need", "size": 478}, {"text":"love", "size": 507}, {"text":"life", "size": 520}, {"text":"look", "size": 521}, {"text":"way", "size": 521}, {"text":"oh", "size": 523}, {"text":"shady", "size": 536}, {"text":"little", "size": 580}, {"text":"right", "size": 593}, {"text":"niggas", "size": 621}, {"text":"want", "size": 622}, {"text":"yo", "size": 624}, {"text":"wanna", "size": 647}, {"text":"ya", "size": 649}, {"text":"nigga", "size": 669}, {"text":"time", "size": 698}, {"text":"ass", "size": 703}, {"text":"think", "size": 711}, {"text":"fucking", "size": 725}, {"text":"yeah", "size": 759}, {"text":"come", "size": 769}, {"text":"let", "size": 798}, {"text":"make", "size": 800}, {"text":"say", "size": 891}, {"text":"man", "size": 925}, {"text":"bitch", "size": 1001}, {"text":"fuck", "size": 1547}, {"text":"know", "size": 1559}, {"text":"cause", "size": 1573}, {"text":"shit", "size": 1843}, {"text":"just", "size": 2425}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/117667606&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Jay-Z",
    x: 2084/3281,
    r: 356057/130000,
    id: "jay_z",
    gender: "male",
    race: "black",
    total_words: 356057,
    unique_words: 2084,
    average_grade_level: 0.092,
    word_length: 3.7,
    syllables_per_word: 1.35,
    one_syllable_words: 0.714,
    testVar: 0.21,
    text: "badonka donk donk",
    frequency: [
        {"text":"till", "size": 114}, {"text":"air", "size": 114}, {"text":"car", "size": 114}, {"text":"mad", "size": 114}, {"text":"heart", "size": 115}, {"text":"style", "size": 115}, {"text":"carter", "size": 116}, {"text":"ma", "size": 116}, {"text":"shot", "size": 116}, {"text":"place", "size": 116}, {"text":"motherfucker", "size": 117}, {"text":"holla", "size": 118}, {"text":"cash", "size": 118}, {"text":"son", "size": 119}, {"text":"chicks", "size": 120}, {"text":"dead", "size": 120}, {"text":"thank", "size": 121}, {"text":"tonight", "size": 121}, {"text":"catch", "size": 121}, {"text":"guess", "size": 121}, {"text":"verse", "size": 121}, {"text":"work", "size": 121}, {"text":"took", "size": 121}, {"text":"going", "size": 122}, {"text":"word", "size": 122}, {"text":"gun", "size": 123}, {"text":"hop", "size": 124}, {"text":"break", "size": 125}, {"text":"song", "size": 125}, {"text":"fly", "size": 125}, {"text":"dick", "size": 125}, {"text":"straight", "size": 126}, {"text":"ask", "size": 126}, {"text":"dog", "size": 126}, {"text":"bleek", "size": 127}, {"text":"spit", "size": 128}, {"text":"hand", "size": 128}, {"text":"hate", "size": 129}, {"text":"ball", "size": 129}, {"text":"getting", "size": 129}, {"text":"light", "size": 130}, {"text":"gettin", "size": 130}, {"text":"didn", "size": 131}, {"text":"lost", "size": 131}, {"text":"coming", "size": 132}, {"text":"ice", "size": 134}, {"text":"throw", "size": 134}, {"text":"away", "size": 134}, {"text":"ladies", "size": 137}, {"text":"roll", "size": 139}, {"text":"city", "size": 140}, {"text":"la", "size": 140}, {"text":"fella", "size": 140}, {"text":"chorus", "size": 140}, {"text":"mean", "size": 140}, {"text":"fuckin", "size": 140}, {"text":"half", "size": 140}, {"text":"boys", "size": 145}, {"text":"old", "size": 148}, {"text":"street", "size": 149}, {"text":"kill", "size": 151}, {"text":"blow", "size": 151}, {"text":"body", "size": 152}, {"text":"crazy", "size": 153}, {"text":"house", "size": 155}, {"text":"tryin", "size": 155}, {"text":"gone", "size": 156}, {"text":"hell", "size": 157}, {"text":"lot", "size": 157}, {"text":"beat", "size": 158}, {"text":"white", "size": 158}, {"text":"club", "size": 158}, {"text":"mon", "size": 159}, {"text":"hands", "size": 160}, {"text":"seen", "size": 161}, {"text":"brooklyn", "size": 161}, {"text":"eyes", "size": 161}, {"text":"trying", "size": 162}, {"text":"hood", "size": 162}, {"text":"everybody", "size": 162}, {"text":"bad", "size": 163}, {"text":"ready", "size": 164}, {"text":"left", "size": 164}, {"text":"thought", "size": 166}, {"text":"change", "size": 167}, {"text":"talking", "size": 168}, {"text":"head", "size": 170}, {"text":"dough", "size": 172}, {"text":"told", "size": 177}, {"text":"girls", "size": 179}, {"text":"hoes", "size": 179}, {"text":"heard", "size": 181}, {"text":"die", "size": 182}, {"text":"people", "size": 183}, {"text":"pop", "size": 185}, {"text":"streets", "size": 187}, {"text":"long", "size": 187}, {"text":"face", "size": 187}, {"text":"hear", "size": 188}, {"text":"damn", "size": 188}, {"text":"home", "size": 192}, {"text":"came", "size": 193}, {"text":"rock", "size": 195}, {"text":"ha", "size": 196}, {"text":"top", "size": 200}, {"text":"bring", "size": 202}, {"text":"turn", "size": 204}, {"text":"ride", "size": 205}, {"text":"really", "size": 207}, {"text":"mma", "size": 211}, {"text":"block", "size": 212}, {"text":"drop", "size": 213}, {"text":"check", "size": 215}, {"text":"things", "size": 215}, {"text":"won", "size": 217}, {"text":"stay", "size": 218}, {"text":"leave", "size": 219}, {"text":"hold", "size": 228}, {"text":"watch", "size": 228}, {"text":"bitches", "size": 230}, {"text":"wit", "size": 232}, {"text":"used", "size": 235}, {"text":"talk", "size": 235}, {"text":"til", "size": 235}, {"text":"try", "size": 238}, {"text":"bout", "size": 243}, {"text":"hey", "size": 243}, {"text":"uhh", "size": 249}, {"text":"run", "size": 256}, {"text":"night", "size": 256}, {"text":"high", "size": 257}, {"text":"hot", "size": 258}, {"text":"best", "size": 258}, {"text":"gonna", "size": 261}, {"text":"mind", "size": 263}, {"text":"god", "size": 265}, {"text":"show", "size": 267}, {"text":"live", "size": 276}, {"text":"flow", "size": 284}, {"text":"play", "size": 284}, {"text":"little", "size": 286}, {"text":"ve", "size": 288}, {"text":"music", "size": 298}, {"text":"hard", "size": 298}, {"text":"world", "size": 304}, {"text":"black", "size": 308}, {"text":"ass", "size": 311}, {"text":"look", "size": 311}, {"text":"gon", "size": 315}, {"text":"better", "size": 317}, {"text":"jigga", "size": 320}, {"text":"roc", "size": 323}, {"text":"day", "size": 338}, {"text":"boy", "size": 346}, {"text":"hit", "size": 346}, {"text":"hov", "size": 349}, {"text":"rap", "size": 365}, {"text":"think", "size": 367}, {"text":"huh", "size": 369}, {"text":"girl", "size": 373}, {"text":"good", "size": 375}, {"text":"said", "size": 381}, {"text":"oh", "size": 391}, {"text":"feel", "size": 394}, {"text":"big", "size": 396}, {"text":"new", "size": 397}, {"text":"tell", "size": 398}, {"text":"stop", "size": 407}, {"text":"game", "size": 432}, {"text":"young", "size": 446}, {"text":"yo", "size": 450}, {"text":"need", "size": 460}, {"text":"way", "size": 473}, {"text":"real", "size": 481}, {"text":"gotta", "size": 486}, {"text":"say", "size": 490}, {"text":"bitch", "size": 516}, {"text":"come", "size": 553}, {"text":"wanna", "size": 569}, {"text":"jay", "size": 583}, {"text":"money", "size": 601}, {"text":"want", "size": 611}, {"text":"baby", "size": 640}, {"text":"life", "size": 658}, {"text":"time", "size": 689}, {"text":"right", "size": 697}, {"text":"man", "size": 706}, {"text":"uh", "size": 720}, {"text":"cause", "size": 771}, {"text":"make", "size": 780}, {"text":"yeah", "size": 791}, {"text":"fuck", "size": 852}, {"text":"let", "size": 903}, {"text":"love", "size": 922}, {"text":"ya", "size": 972}, {"text":"just", "size": 1391}, {"text":"shit", "size": 1394}, {"text":"nigga", "size": 1603}, {"text":"niggas", "size": 1637}, {"text":"know", "size": 1783}
    ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/138904862&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Jurassic 5",
    x: 2425/3281,
    r: 30119/130000,
    id: "jurassic_5",
    gender: "male",
    race: "mixed",
    total_words: 30119,
    unique_words: 2425,
    average_grade_level: 0.116,
    word_length: 3.9,
    syllables_per_word: 1.61,
    one_syllable_words: 0.588,
    testVar: 0.21,
    text: "badonka donk donk",
    frequency: [
        
        {"text":"wait", "size": 11}, {"text":"hands", "size": 11}, {"text":"young", "size": 11}, {"text":"bass", "size": 11}, {"text":"won", "size": 11}, {"text":"til", "size": 11}, {"text":"earth", "size": 12}, {"text":"school", "size": 12}, {"text":"write", "size": 12}, {"text":"door", "size": 12}, {"text":"wild", "size": 12}, {"text":"face", "size": 12}, {"text":"tear", "size": 12}, {"text":"start", "size": 12}, {"text":"rest", "size": 12}, {"text":"block", "size": 12}, {"text":"song", "size": 12}, {"text":"ready", "size": 12}, {"text":"minute", "size": 12}, {"text":"mark", "size": 12}, {"text":"different", "size": 12}, {"text":"satisfaction", "size": 12}, {"text":"known", "size": 12}, {"text":"damn", "size": 12}, {"text":"stand", "size": 12}, {"text":"plan", "size": 12}, {"text":"look", "size": 12}, {"text":"sun", "size": 12}, {"text":"verse", "size": 12}, {"text":"bad", "size": 13}, {"text":"day", "size": 13}, {"text":"heart", "size": 13}, {"text":"matter", "size": 13}, {"text":"use", "size": 13}, {"text":"wit", "size": 13}, {"text":"stay", "size": 13}, {"text":"shine", "size": 13}, {"text":"thought", "size": 13}, {"text":"remember", "size": 13}, {"text":"fact", "size": 13}, {"text":"money", "size": 13}, {"text":"cut", "size": 13}, {"text":"marc", "size": 13}, {"text":"baby", "size": 14}, {"text":"brain", "size": 14}, {"text":"tight", "size": 14}, {"text":"women", "size": 14}, {"text":"red", "size": 14}, {"text":"leave", "size": 14}, {"text":"fish", "size": 14}, {"text":"bust", "size": 14}, {"text":"friendship", "size": 14}, {"text":"vibe", "size": 14}, {"text":"girl", "size": 14}, {"text":"catch", "size": 14}, {"text":"action", "size": 14}, {"text":"spit", "size": 14}, {"text":"flavor", "size": 14}, {"text":"blast", "size": 14}, {"text":"speak", "size": 14}, {"text":"trying", "size": 14}, {"text":"hip", "size": 14}, {"text":"open", "size": 14}, {"text":"cold", "size": 14}, {"text":"little", "size": 15}, {"text":"repeat", "size": 15}, {"text":"really", "size": 15}, {"text":"zaakir", "size": 15}, {"text":"hop", "size": 15}, {"text":"radio", "size": 15}, {"text":"kick", "size": 15}, {"text":"heat", "size": 15}, {"text":"work", "size": 15}, {"text":"hard", "size": 16}, {"text":"pick", "size": 16}, {"text":"lyrics", "size": 16}, {"text":"turn", "size": 16}, {"text":"things", "size": 16}, {"text":"ghetto", "size": 16}, {"text":"big", "size": 16}, {"text":"high", "size": 17}, {"text":"talk", "size": 17}, {"text":"friends", "size": 17}, {"text":"hold", "size": 17}, {"text":"yea", "size": 17}, {"text":"mean", "size": 17}, {"text":"city", "size": 17}, {"text":"dj", "size": 17}, {"text":"ladies", "size": 17}, {"text":"pen", "size": 17}, {"text":"spot", "size": 17}, {"text":"ve", "size": 18}, {"text":"past", "size": 18}, {"text":"blow", "size": 18}, {"text":"flow", "size": 18}, {"text":"times", "size": 18}, {"text":"music", "size": 18}, {"text":"street", "size": 18}, {"text":"doubt", "size": 19}, {"text":"fly", "size": 19}, {"text":"jam", "size": 19}, {"text":"used", "size": 19}, {"text":"bout", "size": 19}, {"text":"chorus", "size": 19}, {"text":"try", "size": 19}, {"text":"top", "size": 19}, {"text":"friend", "size": 19}, {"text":"oh", "size": 19}, {"text":"good", "size": 20}, {"text":"plus", "size": 20}, {"text":"understand", "size": 20}, {"text":"stop", "size": 20}, {"text":"check", "size": 21}, {"text":"tryin", "size": 21}, {"text":"place", "size": 21}, {"text":"long", "size": 21}, {"text":"heard", "size": 22}, {"text":"old", "size": 22}, {"text":"fresh", "size": 22}, {"text":"set", "size": 22}, {"text":"new", "size": 22}, {"text":"akil", "size": 22}, {"text":"break", "size": 22}, {"text":"black", "size": 23}, {"text":"men", "size": 23}, {"text":"soul", "size": 23}, {"text":"rockin", "size": 23}, {"text":"close", "size": 23}, {"text":"yes", "size": 24}, {"text":"ass", "size": 24}, {"text":"thin", "size": 24}, {"text":"house", "size": 25}, {"text":"words", "size": 25}, {"text":"hit", "size": 25}, {"text":"gonna", "size": 25}, {"text":"tell", "size": 25}, {"text":"better", "size": 26}, {"text":"world", "size": 26}, {"text":"hear", "size": 27}, {"text":"mind", "size": 27}, {"text":"came", "size": 27}, {"text":"cuz", "size": 27}, {"text":"nigga", "size": 27}, {"text":"fuck", "size": 28}, {"text":"feel", "size": 28}, {"text":"think", "size": 28}, {"text":"wanna", "size": 29}, {"text":"mic", "size": 29}, {"text":"verbal", "size": 29}, {"text":"bring", "size": 30}, {"text":"dee", "size": 30}, {"text":"show", "size": 31}, {"text":"need", "size": 32}, {"text":"play", "size": 32}, {"text":"word", "size": 33}, {"text":"end", "size": 33}, {"text":"rap", "size": 34}, {"text":"jurassic", "size": 34}, {"text":"live", "size": 34}, {"text":"rhythm", "size": 34}, {"text":"game", "size": 34}, {"text":"brother", "size": 35}, {"text":"beat", "size": 35}, {"text":"respect", "size": 35}, {"text":"uh", "size": 35}, {"text":"line", "size": 35}, {"text":"life", "size": 36}, {"text":"rhymes", "size": 37}, {"text":"rhyme", "size": 37}, {"text":"hot", "size": 37}, {"text":"na", "size": 38}, {"text":"dah", "size": 40}, {"text":"want", "size": 40}, {"text":"come", "size": 42}, {"text":"love", "size": 42}, {"text":"rock", "size": 43}, {"text":"crew", "size": 43}, {"text":"niggas", "size": 44}, {"text":"shit", "size": 44}, {"text":"brothers", "size": 46}, {"text":"style", "size": 46}, {"text":"yeah", "size": 47}, {"text":"mc", "size": 47}, {"text":"party", "size": 48}, {"text":"hey", "size": 50}, {"text":"real", "size": 51}, {"text":"people", "size": 51}, {"text":"say", "size": 54}, {"text":"let", "size": 57}, {"text":"way", "size": 59}, {"text":"man", "size": 60}, {"text":"time", "size": 67}, {"text":"right", "size": 68}, {"text":"make", "size": 83}, {"text":"ya", "size": 90}, {"text":"know", "size": 92}, {"text":"just", "size": 93}, {"text":"cause", "size": 107}, {"text":"da", "size": 134}, {"text":"yo", "size": 143}
        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/150373056&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Kanye",
    x: 1979/3281,
    r: 359832/130000,
    id: "kanye",
    gender: "male",
    race: "black",
    total_words: 359832,
    unique_words: 1979,
    average_grade_level: 0.085,
    word_length: 3.6,
    syllables_per_word: 1.56,
    one_syllable_words: 0.584,
    testVar: 0.21,
    text: "badonka donk donk",
    frequency: [
        {"text":"side", "size": 115}, {"text":"saying", "size": 116}, {"text":"lights", "size": 117}, {"text":"wasn", "size": 118}, {"text":"town", "size": 118}, {"text":"streets", "size": 118}, {"text":"dog", "size": 118}, {"text":"ride", "size": 118}, {"text":"dean", "size": 118}, {"text":"cool", "size": 119}, {"text":"beats", "size": 119}, {"text":"wait", "size": 120}, {"text":"roc", "size": 120}, {"text":"wanted", "size": 120}, {"text":"took", "size": 121}, {"text":"club", "size": 122}, {"text":"shine", "size": 122}, {"text":"house", "size": 123}, {"text":"cuz", "size": 124}, {"text":"ready", "size": 124}, {"text":"sky", "size": 125}, {"text":"gold", "size": 126}, {"text":"bmi", "size": 126}, {"text":"line", "size": 126}, {"text":"car", "size": 127}, {"text":"end", "size": 127}, {"text":"school", "size": 127}, {"text":"spit", "size": 127}, {"text":"tryna", "size": 128}, {"text":"jay", "size": 128}, {"text":"feeling", "size": 128}, {"text":"heard", "size": 130}, {"text":"remember", "size": 130}, {"text":"believe", "size": 130}, {"text":"drop", "size": 130}, {"text":"gettin", "size": 130}, {"text":"didn", "size": 132}, {"text":"break", "size": 132}, {"text":"listen", "size": 132}, {"text":"broke", "size": 133}, {"text":"years", "size": 133}, {"text":"duh", "size": 133}, {"text":"hell", "size": 133}, {"text":"hood", "size": 134}, {"text":"ha", "size": 135}, {"text":"diamonds", "size": 135}, {"text":"chi", "size": 135}, {"text":"fuckin", "size": 135}, {"text":"couldn", "size": 136}, {"text":"studios", "size": 136}, {"text":"doing", "size": 137}, {"text":"went", "size": 137}, {"text":"walk", "size": 137}, {"text":"soul", "size": 138}, {"text":"lot", "size": 138}, {"text":"start", "size": 140}, {"text":"hip", "size": 140}, {"text":"watch", "size": 140}, {"text":"looking", "size": 140}, {"text":"die", "size": 142}, {"text":"light", "size": 142}, {"text":"ye", "size": 143}, {"text":"tryin", "size": 143}, {"text":"bitches", "size": 144}, {"text":"maybe", "size": 145}, {"text":"flow", "size": 145}, {"text":"ask", "size": 148}, {"text":"change", "size": 148}, {"text":"wit", "size": 149}, {"text":"nah", "size": 150}, {"text":"bring", "size": 150}, {"text":"city", "size": 151}, {"text":"getting", "size": 153}, {"text":"woo", "size": 154}, {"text":"thought", "size": 156}, {"text":"throw", "size": 156}, {"text":"eyes", "size": 157}, {"text":"fucking", "size": 160}, {"text":"face", "size": 163}, {"text":"white", "size": 163}, {"text":"friends", "size": 163}, {"text":"guess", "size": 163}, {"text":"gone", "size": 164}, {"text":"huh", "size": 165}, {"text":"fly", "size": 167}, {"text":"tonight", "size": 169}, {"text":"wrong", "size": 169}, {"text":"heart", "size": 169}, {"text":"hop", "size": 169}, {"text":"til", "size": 173}, {"text":"top", "size": 173}, {"text":"hoes", "size": 174}, {"text":"rock", "size": 176}, {"text":"hands", "size": 177}, {"text":"song", "size": 180}, {"text":"crazy", "size": 181}, {"text":"dream", "size": 182}, {"text":"trying", "size": 183}, {"text":"hate", "size": 186}, {"text":"hot", "size": 186}, {"text":"leave", "size": 188}, {"text":"head", "size": 192}, {"text":"away", "size": 192}, {"text":"hear", "size": 195}, {"text":"seen", "size": 195}, {"text":"turn", "size": 204}, {"text":"old", "size": 204}, {"text":"mind", "size": 205}, {"text":"play", "size": 207}, {"text":"run", "size": 207}, {"text":"beat", "size": 210}, {"text":"best", "size": 212}, {"text":"going", "size": 215}, {"text":"damn", "size": 218}, {"text":"hold", "size": 218}, {"text":"la", "size": 219}, {"text":"long", "size": 220}, {"text":"stay", "size": 220}, {"text":"work", "size": 221}, {"text":"bad", "size": 221}, {"text":"talking", "size": 227}, {"text":"used", "size": 228}, {"text":"young", "size": 229}, {"text":"came", "size": 233}, {"text":"high", "size": 233}, {"text":"hard", "size": 236}, {"text":"everybody", "size": 238}, {"text":"rap", "size": 240}, {"text":"things", "size": 241}, {"text":"won", "size": 242}, {"text":"try", "size": 244}, {"text":"girls", "size": 250}, {"text":"mean", "size": 251}, {"text":"live", "size": 256}, {"text":"little", "size": 258}, {"text":"night", "size": 261}, {"text":"home", "size": 265}, {"text":"mma", "size": 274}, {"text":"boy", "size": 284}, {"text":"big", "size": 288}, {"text":"show", "size": 290}, {"text":"better", "size": 296}, {"text":"hey", "size": 303}, {"text":"hit", "size": 305}, {"text":"bout", "size": 313}, {"text":"god", "size": 322}, {"text":"talk", "size": 326}, {"text":"black", "size": 332}, {"text":"told", "size": 334}, {"text":"world", "size": 338}, {"text":"ass", "size": 339}, {"text":"game", "size": 340}, {"text":"ve", "size": 346}, {"text":"stop", "size": 346}, {"text":"day", "size": 354}, {"text":"west", "size": 360}, {"text":"really", "size": 366}, {"text":"real", "size": 366}, {"text":"think", "size": 369}, {"text":"gonna", "size": 375}, {"text":"gon", "size": 378}, {"text":"kanye", "size": 386}, {"text":"gotta", "size": 407}, {"text":"feel", "size": 424}, {"text":"yo", "size": 448}, {"text":"money", "size": 453}, {"text":"music", "size": 456}, {"text":"look", "size": 459}, {"text":"bitch", "size": 478}, {"text":"new", "size": 480}, {"text":"people", "size": 519}, {"text":"uh", "size": 521}, {"text":"wanna", "size": 535}, {"text":"said", "size": 545}, {"text":"ya", "size": 549}, {"text":"need", "size": 551}, {"text":"good", "size": 556}, {"text":"tell", "size": 563}, {"text":"come", "size": 571}, {"text":"life", "size": 588}, {"text":"oh", "size": 590}, {"text":"fuck", "size": 593}, {"text":"way", "size": 606}, {"text":"girl", "size": 633}, {"text":"baby", "size": 656}, {"text":"time", "size": 678}, {"text":"right", "size": 734}, {"text":"yeah", "size": 816}, {"text":"man", "size": 864}, {"text":"make", "size": 871}, {"text":"say", "size": 878}, {"text":"love", "size": 884}, {"text":"want", "size": 890}, {"text":"niggas", "size": 918}, {"text":"nigga", "size": 953}, {"text":"cause", "size": 957}, {"text":"let", "size": 963}, {"text":"shit", "size": 1085}, {"text":"just", "size": 1725}, {"text":"know", "size": 2019}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/86095064&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Lil Jon",
    x: 2058/3281,
    r: 111797/130000,
    id: "lil_jon",
    gender: "male",
    race: "black",
    total_words: 111797,
    unique_words: 2058,
    average_grade_level: 0.056,
    word_length: 3.6,
    syllables_per_word: 1.33,
    one_syllable_words: 0.723,
    sentiment: -0.25,
    testVar: 0.21,
    text: "badonka donk donk",
    frequency: [
        {"text":"dirty", "size": 46}, {"text":"motherfuckers", "size": 46}, {"text":"boom", "size": 47}, {"text":"fo", "size": 47}, {"text":"walk", "size": 47}, {"text":"toes", "size": 47}, {"text":"car", "size": 47}, {"text":"world", "size": 47}, {"text":"mind", "size": 48}, {"text":"mama", "size": 48}, {"text":"told", "size": 48}, {"text":"high", "size": 48}, {"text":"fight", "size": 48}, {"text":"fucked", "size": 48}, {"text":"lot", "size": 49}, {"text":"goin", "size": 49}, {"text":"die", "size": 50}, {"text":"city", "size": 50}, {"text":"shots", "size": 50}, {"text":"gone", "size": 50}, {"text":"buck", "size": 50}, {"text":"daddy", "size": 50}, {"text":"mo", "size": 51}, {"text":"hook", "size": 51}, {"text":"ah", "size": 51}, {"text":"top", "size": 51}, {"text":"round", "size": 52}, {"text":"momma", "size": 52}, {"text":"motherfucking", "size": 52}, {"text":"shorty", "size": 52}, {"text":"level", "size": 52}, {"text":"home", "size": 53}, {"text":"mean", "size": 53}, {"text":"nasty", "size": 53}, {"text":"stay", "size": 53}, {"text":"doin", "size": 54}, {"text":"everybody", "size": 54}, {"text":"party", "size": 54}, {"text":"ooh", "size": 54}, {"text":"hot", "size": 55}, {"text":"hell", "size": 55}, {"text":"straight", "size": 56}, {"text":"little", "size": 56}, {"text":"floor", "size": 56}, {"text":"fucking", "size": 56}, {"text":"eastside", "size": 57}, {"text":"side", "size": 57}, {"text":"hold", "size": 58}, {"text":"try", "size": 58}, {"text":"deep", "size": 58}, {"text":"getting", "size": 59}, {"text":"god", "size": 59}, {"text":"push", "size": 59}, {"text":"bend", "size": 60}, {"text":"town", "size": 60}, {"text":"act", "size": 60}, {"text":"life", "size": 60}, {"text":"rock", "size": 60}, {"text":"roll", "size": 60}, {"text":"block", "size": 60}, {"text":"cha", "size": 60}, {"text":"gonna", "size": 61}, {"text":"talk", "size": 61}, {"text":"ha", "size": 61}, {"text":"touch", "size": 61}, {"text":"smoke", "size": 62}, {"text":"booty", "size": 62}, {"text":"chorus", "size": 63}, {"text":"blow", "size": 63}, {"text":"mi", "size": 64}, {"text":"dumb", "size": 64}, {"text":"jook", "size": 64}, {"text":"beat", "size": 64}, {"text":"body", "size": 65}, {"text":"start", "size": 66}, {"text":"skeet", "size": 66}, {"text":"pimp", "size": 66}, {"text":"white", "size": 66}, {"text":"boys", "size": 67}, {"text":"mouth", "size": 67}, {"text":"pull", "size": 67}, {"text":"bi", "size": 68}, {"text":"tryin", "size": 68}, {"text":"gangsta", "size": 68}, {"text":"itch", "size": 69}, {"text":"watch", "size": 69}, {"text":"break", "size": 69}, {"text":"pimpin", "size": 70}, {"text":"night", "size": 72}, {"text":"tonight", "size": 72}, {"text":"pop", "size": 73}, {"text":"south", "size": 74}, {"text":"feel", "size": 74}, {"text":"dick", "size": 75}, {"text":"day", "size": 76}, {"text":"huh", "size": 76}, {"text":"wine", "size": 77}, {"text":"gettin", "size": 77}, {"text":"new", "size": 77}, {"text":"leave", "size": 77}, {"text":"play", "size": 78}, {"text":"gal", "size": 78}, {"text":"repeat", "size": 79}, {"text":"low", "size": 80}, {"text":"la", "size": 81}, {"text":"really", "size": 81}, {"text":"lookin", "size": 83}, {"text":"talkin", "size": 84}, {"text":"thang", "size": 84}, {"text":"girls", "size": 85}, {"text":"head", "size": 85}, {"text":"bounce", "size": 86}, {"text":"lick", "size": 87}, {"text":"click", "size": 88}, {"text":"mma", "size": 88}, {"text":"krazy", "size": 89}, {"text":"turn", "size": 90}, {"text":"said", "size": 90}, {"text":"hard", "size": 91}, {"text":"think", "size": 91}, {"text":"face", "size": 91}, {"text":"bitches", "size": 93}, {"text":"dat", "size": 93}, {"text":"won", "size": 93}, {"text":"hood", "size": 94}, {"text":"hands", "size": 96}, {"text":"motherfuckin", "size": 97}, {"text":"work", "size": 98}, {"text":"good", "size": 99}, {"text":"jump", "size": 99}, {"text":"better", "size": 101}, {"text":"da", "size": 103}, {"text":"run", "size": 104}, {"text":"drop", "size": 106}, {"text":"boy", "size": 116}, {"text":"ready", "size": 116}, {"text":"game", "size": 116}, {"text":"show", "size": 118}, {"text":"ay", "size": 124}, {"text":"step", "size": 125}, {"text":"ride", "size": 125}, {"text":"damn", "size": 126}, {"text":"look", "size": 126}, {"text":"oh", "size": 126}, {"text":"pussy", "size": 126}, {"text":"dance", "size": 127}, {"text":"need", "size": 129}, {"text":"shawty", "size": 131}, {"text":"dem", "size": 132}, {"text":"scared", "size": 135}, {"text":"bring", "size": 137}, {"text":"bout", "size": 144}, {"text":"real", "size": 147}, {"text":"way", "size": 150}, {"text":"gotta", "size": 151}, {"text":"fuckin", "size": 152}, {"text":"motherfucker", "size": 153}, {"text":"love", "size": 154}, {"text":"hit", "size": 154}, {"text":"yuh", "size": 155}, {"text":"money", "size": 156}, {"text":"stop", "size": 158}, {"text":"big", "size": 167}, {"text":"uh", "size": 168}, {"text":"hoes", "size": 181}, {"text":"tell", "size": 181}, {"text":"say", "size": 181}, {"text":"di", "size": 184}, {"text":"crunk", "size": 189}, {"text":"shake", "size": 198}, {"text":"want", "size": 201}, {"text":"gon", "size": 210}, {"text":"time", "size": 213}, {"text":"baby", "size": 213}, {"text":"jon", "size": 214}, {"text":"right", "size": 222}, {"text":"wit", "size": 224}, {"text":"throw", "size": 234}, {"text":"man", "size": 236}, {"text":"come", "size": 242}, {"text":"make", "size": 255}, {"text":"ho", "size": 264}, {"text":"club", "size": 269}, {"text":"wanna", "size": 274}, {"text":"lil", "size": 288}, {"text":"girl", "size": 298}, {"text":"hey", "size": 306}, {"text":"cause", "size": 326}, {"text":"yo", "size": 393}, {"text":"just", "size": 397}, {"text":"ass", "size": 400}, {"text":"let", "size": 472}, {"text":"yeah", "size": 501}, {"text":"shit", "size": 520}, {"text":"niggas", "size": 524}, {"text":"ya", "size": 548}, {"text":"know", "size": 588}, {"text":"bitch", "size": 611}, {"text":"fuck", "size": 629}, {"text":"nigga", "size": 884}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/125529024&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Lil Wayne",
    x: 1888/3281,
    r: 708009/130000,
    id: "lil_wayne",
    gender: "male",
    race: "black",
    total_words: 708009,
    unique_words: 1888, 
    average_grade_level: 0.103,
    word_length: 3.6,
    syllables_per_word: 1.34,
    one_syllable_words: 0.715,
    testVar: 0.21,
    text: "badonka donk donk",
    frequency: [
        {"text":"rap", "size": 240}, {"text":"homie", "size": 241}, {"text":"goin", "size": 242}, {"text":"away", "size": 244}, {"text":"ice", "size": 245}, {"text":"trying", "size": 245}, {"text":"lot", "size": 246}, {"text":"tryin", "size": 247}, {"text":"left", "size": 251}, {"text":"dat", "size": 251}, {"text":"spit", "size": 252}, {"text":"shawty", "size": 253}, {"text":"motherfucker", "size": 254}, {"text":"heart", "size": 254}, {"text":"fresh", "size": 255}, {"text":"tryna", "size": 257}, {"text":"heard", "size": 258}, {"text":"wait", "size": 258}, {"text":"ready", "size": 259}, {"text":"mama", "size": 259}, {"text":"talkin", "size": 259}, {"text":"blow", "size": 259}, {"text":"boys", "size": 262}, {"text":"mouth", "size": 263}, {"text":"girls", "size": 268}, {"text":"thats", "size": 269}, {"text":"hate", "size": 270}, {"text":"weed", "size": 270}, {"text":"came", "size": 270}, {"text":"crazy", "size": 275}, {"text":"dead", "size": 275}, {"text":"low", "size": 276}, {"text":"boi", "size": 278}, {"text":"bang", "size": 278}, {"text":"side", "size": 281}, {"text":"rich", "size": 283}, {"text":"cut", "size": 283}, {"text":"blood", "size": 284}, {"text":"check", "size": 285}, {"text":"ha", "size": 288}, {"text":"people", "size": 288}, {"text":"hope", "size": 288}, {"text":"catch", "size": 290}, {"text":"yes", "size": 292}, {"text":"everybody", "size": 292}, {"text":"smoke", "size": 293}, {"text":"carter", "size": 294}, {"text":"tunechi", "size": 294}, {"text":"old", "size": 294}, {"text":"pull", "size": 295}, {"text":"roll", "size": 296}, {"text":"believe", "size": 298}, {"text":"light", "size": 298}, {"text":"eyes", "size": 300}, {"text":"holla", "size": 305}, {"text":"daddy", "size": 305}, {"text":"car", "size": 306}, {"text":"paper", "size": 308}, {"text":"ball", "size": 311}, {"text":"throw", "size": 311}, {"text":"dont", "size": 311}, {"text":"ask", "size": 313}, {"text":"talking", "size": 313}, {"text":"god", "size": 314}, {"text":"looking", "size": 317}, {"text":"club", "size": 317}, {"text":"walk", "size": 318}, {"text":"flow", "size": 320}, {"text":"streets", "size": 324}, {"text":"lookin", "size": 324}, {"text":"best", "size": 324}, {"text":"street", "size": 327}, {"text":"getting", "size": 330}, {"text":"dog", "size": 335}, {"text":"til", "size": 337}, {"text":"ma", "size": 338}, {"text":"body", "size": 342}, {"text":"gettin", "size": 343}, {"text":"rock", "size": 343}, {"text":"hold", "size": 346}, {"text":"white", "size": 348}, {"text":"cuz", "size": 348}, {"text":"shoot", "size": 351}, {"text":"try", "size": 360}, {"text":"work", "size": 363}, {"text":"house", "size": 365}, {"text":"straight", "size": 366}, {"text":"block", "size": 368}, {"text":"home", "size": 372}, {"text":"mean", "size": 375}, {"text":"hear", "size": 379}, {"text":"mind", "size": 379}, {"text":"really", "size": 381}, {"text":"live", "size": 382}, {"text":"bring", "size": 385}, {"text":"gun", "size": 388}, {"text":"ve", "size": 393}, {"text":"going", "size": 398}, {"text":"long", "size": 411}, {"text":"hey", "size": 411}, {"text":"beat", "size": 417}, {"text":"eat", "size": 418}, {"text":"little", "size": 423}, {"text":"won", "size": 425}, {"text":"kill", "size": 431}, {"text":"hood", "size": 432}, {"text":"told", "size": 441}, {"text":"fly", "size": 447}, {"text":"damn", "size": 455}, {"text":"turn", "size": 460}, {"text":"die", "size": 462}, {"text":"show", "size": 466}, {"text":"gone", "size": 467}, {"text":"stay", "size": 471}, {"text":"watch", "size": 473}, {"text":"talk", "size": 477}, {"text":"face", "size": 488}, {"text":"top", "size": 494}, {"text":"black", "size": 497}, {"text":"gonna", "size": 499}, {"text":"night", "size": 504}, {"text":"fucking", "size": 505}, {"text":"ride", "size": 510}, {"text":"cash", "size": 514}, {"text":"yea", "size": 514}, {"text":"pop", "size": 517}, {"text":"red", "size": 526}, {"text":"play", "size": 532}, {"text":"bad", "size": 533}, {"text":"da", "size": 535}, {"text":"world", "size": 535}, {"text":"leave", "size": 546}, {"text":"drop", "size": 548}, {"text":"high", "size": 562}, {"text":"run", "size": 575}, {"text":"day", "size": 584}, {"text":"ho", "size": 597}, {"text":"feel", "size": 598}, {"text":"dick", "size": 599}, {"text":"fuckin", "size": 600}, {"text":"hard", "size": 606}, {"text":"im", "size": 621}, {"text":"stop", "size": 621}, {"text":"uh", "size": 623}, {"text":"said", "size": 645}, {"text":"tha", "size": 651}, {"text":"think", "size": 653}, {"text":"wayne", "size": 675}, {"text":"head", "size": 723}, {"text":"gon", "size": 752}, {"text":"wit", "size": 766}, {"text":"yo", "size": 767}, {"text":"way", "size": 773}, {"text":"game", "size": 784}, {"text":"real", "size": 789}, {"text":"better", "size": 790}, {"text":"life", "size": 803}, {"text":"hoes", "size": 812}, {"text":"big", "size": 814}, {"text":"hot", "size": 852}, {"text":"hit", "size": 861}, {"text":"mma", "size": 865}, {"text":"bout", "size": 867}, {"text":"new", "size": 875}, {"text":"good", "size": 925}, {"text":"need", "size": 979}, {"text":"oh", "size": 1000}, {"text":"gotta", "size": 1008}, {"text":"look", "size": 1013}, {"text":"wanna", "size": 1014}, {"text":"pussy", "size": 1019}, {"text":"bitches", "size": 1042}, {"text":"lil", "size": 1071}, {"text":"time", "size": 1077}, {"text":"weezy", "size": 1099}, {"text":"ass", "size": 1108}, {"text":"want", "size": 1118}, {"text":"right", "size": 1229}, {"text":"tell", "size": 1262}, {"text":"young", "size": 1326}, {"text":"come", "size": 1365}, {"text":"boy", "size": 1366}, {"text":"girl", "size": 1394}, {"text":"love", "size": 1452}, {"text":"let", "size": 1667}, {"text":"say", "size": 1738}, {"text":"man", "size": 1750}, {"text":"cause", "size": 1838}, {"text":"make", "size": 1918}, {"text":"baby", "size": 1973}, {"text":"yeah", "size": 2441}, {"text":"fuck", "size": 2469}, {"text":"shit", "size": 2524}, {"text":"just", "size": 2634}, {"text":"niggas", "size": 2813}, {"text":"ya", "size": 2867}, {"text":"money", "size": 3070}, {"text":"bitch", "size": 3308}, {"text":"know", "size": 3432}, {"text":"nigga", "size": 4572}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/147881425&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "LL Cool J",
    x: 2157/3281,
    r: 144682/130000,
    id: "ll_cool_j",
    gender: "male",
    race: "black",
    total_words: 144682,
    unique_words: 2157,
    average_grade_level: 0.084,
    word_length: 3.7,
    syllables_per_word: 1.37,
    one_syllable_words: 0.701,
    sentiment: -0.25,
    testVar: 0.21,
    text: "badonka donk donk",
    frequency: [
        {"text":"work", "size": 50}, {"text":"kid", "size": 50}, {"text":"style", "size": 50}, {"text":"away", "size": 50}, {"text":"brother", "size": 51}, {"text":"home", "size": 51}, {"text":"flow", "size": 51}, {"text":"cold", "size": 52}, {"text":"mon", "size": 52}, {"text":"side", "size": 52}, {"text":"til", "size": 53}, {"text":"soul", "size": 53}, {"text":"high", "size": 53}, {"text":"sweet", "size": 53}, {"text":"roll", "size": 53}, {"text":"club", "size": 53}, {"text":"king", "size": 53}, {"text":"mad", "size": 53}, {"text":"air", "size": 54}, {"text":"touch", "size": 54}, {"text":"things", "size": 54}, {"text":"years", "size": 54}, {"text":"light", "size": 55}, {"text":"seen", "size": 55}, {"text":"went", "size": 55}, {"text":"dance", "size": 55}, {"text":"block", "size": 56}, {"text":"ladies", "size": 56}, {"text":"comin", "size": 56}, {"text":"listen", "size": 57}, {"text":"buckin", "size": 58}, {"text":"true", "size": 58}, {"text":"hell", "size": 58}, {"text":"pop", "size": 58}, {"text":"heard", "size": 58}, {"text":"verse", "size": 58}, {"text":"honey", "size": 58}, {"text":"bitch", "size": 59}, {"text":"chill", "size": 59}, {"text":"ready", "size": 59}, {"text":"uncle", "size": 59}, {"text":"type", "size": 59}, {"text":"ask", "size": 60}, {"text":"start", "size": 60}, {"text":"msayin", "size": 60}, {"text":"old", "size": 60}, {"text":"ice", "size": 60}, {"text":"walk", "size": 60}, {"text":"thought", "size": 61}, {"text":"bells", "size": 61}, {"text":"deep", "size": 61}, {"text":"pump", "size": 62}, {"text":"stay", "size": 62}, {"text":"nothin", "size": 62}, {"text":"throw", "size": 63}, {"text":"different", "size": 63}, {"text":"came", "size": 63}, {"text":"mr", "size": 64}, {"text":"freak", "size": 64}, {"text":"damn", "size": 64}, {"text":"left", "size": 65}, {"text":"body", "size": 65}, {"text":"everybody", "size": 65}, {"text":"believe", "size": 65}, {"text":"understand", "size": 65}, {"text":"funk", "size": 65}, {"text":"slow", "size": 66}, {"text":"turn", "size": 66}, {"text":"ill", "size": 66}, {"text":"yes", "size": 66}, {"text":"hop", "size": 67}, {"text":"house", "size": 67}, {"text":"young", "size": 68}, {"text":"best", "size": 68}, {"text":"mc", "size": 70}, {"text":"funky", "size": 70}, {"text":"ma", "size": 71}, {"text":"goin", "size": 71}, {"text":"buck", "size": 72}, {"text":"hip", "size": 72}, {"text":"eyes", "size": 73}, {"text":"told", "size": 73}, {"text":"talkin", "size": 74}, {"text":"top", "size": 74}, {"text":"watch", "size": 74}, {"text":"doin", "size": 74}, {"text":"repeat", "size": 74}, {"text":"rhyme", "size": 75}, {"text":"creator", "size": 76}, {"text":"mean", "size": 76}, {"text":"ride", "size": 76}, {"text":"tonight", "size": 76}, {"text":"blow", "size": 76}, {"text":"bad", "size": 76}, {"text":"talk", "size": 77}, {"text":"gon", "size": 78}, {"text":"crazy", "size": 79}, {"text":"somethin", "size": 79}, {"text":"rhymes", "size": 79}, {"text":"eat", "size": 80}, {"text":"hand", "size": 80}, {"text":"stand", "size": 80}, {"text":"mic", "size": 81}, {"text":"boy", "size": 81}, {"text":"long", "size": 81}, {"text":"jam", "size": 81}, {"text":"hands", "size": 81}, {"text":"party", "size": 82}, {"text":"drop", "size": 83}, {"text":"show", "size": 83}, {"text":"shot", "size": 84}, {"text":"girls", "size": 84}, {"text":"sayin", "size": 86}, {"text":"really", "size": 87}, {"text":"hey", "size": 87}, {"text":"break", "size": 87}, {"text":"face", "size": 88}, {"text":"night", "size": 88}, {"text":"won", "size": 88}, {"text":"leave", "size": 89}, {"text":"try", "size": 90}, {"text":"run", "size": 91}, {"text":"mma", "size": 92}, {"text":"bout", "size": 93}, {"text":"ve", "size": 97}, {"text":"hear", "size": 99}, {"text":"people", "size": 99}, {"text":"black", "size": 100}, {"text":"rap", "size": 100}, {"text":"live", "size": 102}, {"text":"queens", "size": 102}, {"text":"diggy", "size": 104}, {"text":"mind", "size": 107}, {"text":"head", "size": 107}, {"text":"heart", "size": 108}, {"text":"game", "size": 108}, {"text":"gonna", "size": 108}, {"text":"check", "size": 108}, {"text":"huh", "size": 109}, {"text":"fuck", "size": 111}, {"text":"wit", "size": 113}, {"text":"god", "size": 113}, {"text":"play", "size": 113}, {"text":"hold", "size": 113}, {"text":"gettin", "size": 114}, {"text":"bring", "size": 119}, {"text":"better", "size": 119}, {"text":"new", "size": 120}, {"text":"day", "size": 124}, {"text":"ass", "size": 124}, {"text":"oh", "size": 125}, {"text":"money", "size": 129}, {"text":"hit", "size": 129}, {"text":"look", "size": 130}, {"text":"hard", "size": 133}, {"text":"life", "size": 133}, {"text":"cut", "size": 134}, {"text":"world", "size": 137}, {"text":"beat", "size": 140}, {"text":"good", "size": 144}, {"text":"little", "size": 152}, {"text":"think", "size": 155}, {"text":"word", "size": 158}, {"text":"big", "size": 158}, {"text":"ha", "size": 160}, {"text":"stop", "size": 161}, {"text":"chorus", "size": 165}, {"text":"gotta", "size": 170}, {"text":"rock", "size": 170}, {"text":"say", "size": 186}, {"text":"feel", "size": 188}, {"text":"uhh", "size": 190}, {"text":"said", "size": 200}, {"text":"tell", "size": 205}, {"text":"niggas", "size": 208}, {"text":"hot", "size": 209}, {"text":"shit", "size": 212}, {"text":"real", "size": 213}, {"text":"want", "size": 216}, {"text":"need", "size": 219}, {"text":"nigga", "size": 224}, {"text":"right", "size": 234}, {"text":"way", "size": 237}, {"text":"uh", "size": 308}, {"text":"time", "size": 324}, {"text":"come", "size": 332}, {"text":"yo", "size": 334}, {"text":"cause", "size": 337}, {"text":"let", "size": 338}, {"text":"girl", "size": 369}, {"text":"wanna", "size": 370}, {"text":"cool", "size": 377}, {"text":"make", "size": 391}, {"text":"yeah", "size": 452}, {"text":"just", "size": 485}, {"text":"ya", "size": 486}, {"text":"man", "size": 527}, {"text":"love", "size": 589}, {"text":"know", "size": 675}, {"text":"baby", "size": 781}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/451046&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Ludacris",
    x: 2005/3281,
    r: 209691/130000,
    id: "ludacris",
    gender: "male",
    race: "black",
    total_words: 209691,
    unique_words: 2005,
    average_grade_level: 0.107,
    word_length: 3.7,
    syllables_per_word: 1.35,
    one_syllable_words: 0.711,
    sentiment: -0.25,
    testVar: 0.21,
    text: "badonka donk donk",
    frequency: [
        {"text":"ooh", "size": 74}, {"text":"young", "size": 74}, {"text":"hand", "size": 74}, {"text":"trip", "size": 74}, {"text":"buy", "size": 75}, {"text":"shawty", "size": 75}, {"text":"fat", "size": 76}, {"text":"phone", "size": 76}, {"text":"comin", "size": 76}, {"text":"hop", "size": 77}, {"text":"somethin", "size": 78}, {"text":"okay", "size": 78}, {"text":"things", "size": 78}, {"text":"stand", "size": 78}, {"text":"rappers", "size": 78}, {"text":"couple", "size": 78}, {"text":"rich", "size": 78}, {"text":"looking", "size": 78}, {"text":"pull", "size": 78}, {"text":"eat", "size": 78}, {"text":"bed", "size": 78}, {"text":"talking", "size": 78}, {"text":"old", "size": 79}, {"text":"side", "size": 79}, {"text":"ohh", "size": 79}, {"text":"round", "size": 79}, {"text":"fresh", "size": 80}, {"text":"sayin", "size": 81}, {"text":"street", "size": 82}, {"text":"going", "size": 82}, {"text":"pain", "size": 82}, {"text":"heard", "size": 82}, {"text":"ridin", "size": 83}, {"text":"eyes", "size": 83}, {"text":"went", "size": 83}, {"text":"white", "size": 84}, {"text":"somebody", "size": 84}, {"text":"tryin", "size": 84}, {"text":"getting", "size": 85}, {"text":"dance", "size": 85}, {"text":"huh", "size": 85}, {"text":"floor", "size": 85}, {"text":"goin", "size": 86}, {"text":"grab", "size": 86}, {"text":"catch", "size": 87}, {"text":"act", "size": 88}, {"text":"rap", "size": 88}, {"text":"dick", "size": 88}, {"text":"mad", "size": 88}, {"text":"town", "size": 89}, {"text":"chick", "size": 90}, {"text":"dirty", "size": 90}, {"text":"south", "size": 91}, {"text":"car", "size": 92}, {"text":"try", "size": 93}, {"text":"shorty", "size": 93}, {"text":"cut", "size": 93}, {"text":"straight", "size": 95}, {"text":"away", "size": 95}, {"text":"smoke", "size": 95}, {"text":"block", "size": 95}, {"text":"jump", "size": 96}, {"text":"mo", "size": 96}, {"text":"talkin", "size": 97}, {"text":"start", "size": 98}, {"text":"party", "size": 98}, {"text":"sex", "size": 98}, {"text":"fucking", "size": 98}, {"text":"gone", "size": 100}, {"text":"pussy", "size": 101}, {"text":"watch", "size": 101}, {"text":"girls", "size": 102}, {"text":"house", "size": 102}, {"text":"room", "size": 103}, {"text":"oooh", "size": 104}, {"text":"run", "size": 104}, {"text":"streets", "size": 105}, {"text":"mouth", "size": 106}, {"text":"beep", "size": 106}, {"text":"touch", "size": 107}, {"text":"hands", "size": 107}, {"text":"live", "size": 108}, {"text":"thang", "size": 108}, {"text":"bring", "size": 108}, {"text":"cuz", "size": 108}, {"text":"high", "size": 111}, {"text":"long", "size": 111}, {"text":"check", "size": 111}, {"text":"turn", "size": 112}, {"text":"came", "size": 112}, {"text":"tonight", "size": 113}, {"text":"fuckin", "size": 116}, {"text":"black", "size": 117}, {"text":"rock", "size": 118}, {"text":"people", "size": 118}, {"text":"told", "size": 118}, {"text":"play", "size": 119}, {"text":"lil", "size": 120}, {"text":"hot", "size": 122}, {"text":"shake", "size": 124}, {"text":"face", "size": 125}, {"text":"hear", "size": 125}, {"text":"ready", "size": 126}, {"text":"lookin", "size": 126}, {"text":"ve", "size": 128}, {"text":"leave", "size": 128}, {"text":"beat", "size": 129}, {"text":"til", "size": 130}, {"text":"talk", "size": 131}, {"text":"ha", "size": 133}, {"text":"throw", "size": 133}, {"text":"pop", "size": 134}, {"text":"hold", "size": 135}, {"text":"hell", "size": 135}, {"text":"mean", "size": 137}, {"text":"gettin", "size": 137}, {"text":"home", "size": 137}, {"text":"women", "size": 137}, {"text":"mind", "size": 138}, {"text":"best", "size": 138}, {"text":"won", "size": 141}, {"text":"low", "size": 143}, {"text":"work", "size": 145}, {"text":"bitches", "size": 147}, {"text":"day", "size": 154}, {"text":"roll", "size": 155}, {"text":"drop", "size": 156}, {"text":"club", "size": 157}, {"text":"new", "size": 160}, {"text":"blow", "size": 162}, {"text":"hard", "size": 165}, {"text":"break", "size": 169}, {"text":"bad", "size": 170}, {"text":"boy", "size": 170}, {"text":"world", "size": 171}, {"text":"show", "size": 174}, {"text":"really", "size": 177}, {"text":"head", "size": 177}, {"text":"stay", "size": 178}, {"text":"hood", "size": 180}, {"text":"gonna", "size": 181}, {"text":"wit", "size": 181}, {"text":"body", "size": 185}, {"text":"look", "size": 199}, {"text":"big", "size": 202}, {"text":"life", "size": 203}, {"text":"top", "size": 203}, {"text":"good", "size": 205}, {"text":"little", "size": 207}, {"text":"better", "size": 207}, {"text":"stop", "size": 208}, {"text":"game", "size": 209}, {"text":"real", "size": 214}, {"text":"hey", "size": 217}, {"text":"night", "size": 218}, {"text":"think", "size": 222}, {"text":"ride", "size": 223}, {"text":"said", "size": 223}, {"text":"hoes", "size": 228}, {"text":"hello", "size": 231}, {"text":"uh", "size": 236}, {"text":"mma", "size": 237}, {"text":"ho", "size": 238}, {"text":"ludacris", "size": 246}, {"text":"damn", "size": 247}, {"text":"gon", "size": 248}, {"text":"bout", "size": 257}, {"text":"gotta", "size": 265}, {"text":"feel", "size": 268}, {"text":"need", "size": 292}, {"text":"luda", "size": 305}, {"text":"hit", "size": 308}, {"text":"way", "size": 343}, {"text":"money", "size": 352}, {"text":"love", "size": 372}, {"text":"oh", "size": 375}, {"text":"want", "size": 381}, {"text":"come", "size": 399}, {"text":"baby", "size": 428}, {"text":"ass", "size": 431}, {"text":"niggas", "size": 435}, {"text":"tell", "size": 441}, {"text":"girl", "size": 449}, {"text":"fuck", "size": 461}, {"text":"say", "size": 462}, {"text":"right", "size": 467}, {"text":"bitch", "size": 478}, {"text":"shit", "size": 481}, {"text":"man", "size": 497}, {"text":"time", "size": 541}, {"text":"wanna", "size": 547}, {"text":"yo", "size": 604}, {"text":"yeah", "size": 620}, {"text":"ya", "size": 649}, {"text":"make", "size": 693}, {"text":"cause", "size": 728}, {"text":"nigga", "size": 730}, {"text":"let", "size": 762}, {"text":"know", "size": 893}, {"text":"just", "size": 917}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/65641283&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Missy Elliott",
    x: 1323/3281,
    r: 139263/130000,
    id: "missy_elliott",
    gender: "female",
    race: "black",
    total_words: 139263,
    unique_words: 1323,
    average_grade_level: 0.075,
    word_length: 3.4,
    syllables_per_word: 1.3,
    one_syllable_words: 0.746,
    sentiment: -0.25,
    testVar: 0.21,
    text: "badonka donk donk",
    frequency: [
        {"text":"friend", "size": 49}, {"text":"wop", "size": 49}, {"text":"blow", "size": 50}, {"text":"sing", "size": 50}, {"text":"world", "size": 50}, {"text":"lets", "size": 51}, {"text":"set", "size": 51}, {"text":"wait", "size": 51}, {"text":"top", "size": 51}, {"text":"hand", "size": 52}, {"text":"movin", "size": 52}, {"text":"feet", "size": 52}, {"text":"yall", "size": 52}, {"text":"dick", "size": 52}, {"text":"engineer", "size": 52}, {"text":"verse", "size": 53}, {"text":"sick", "size": 53}, {"text":"virginia", "size": 53}, {"text":"dem", "size": 53}, {"text":"york", "size": 55}, {"text":"away", "size": 55}, {"text":"told", "size": 55}, {"text":"matter", "size": 55}, {"text":"act", "size": 56}, {"text":"heard", "size": 56}, {"text":"style", "size": 56}, {"text":"ta", "size": 57}, {"text":"heart", "size": 57}, {"text":"hands", "size": 57}, {"text":"ladies", "size": 58}, {"text":"funk", "size": 58}, {"text":"clothes", "size": 58}, {"text":"gettin", "size": 58}, {"text":"mad", "size": 58}, {"text":"mommy", "size": 59}, {"text":"sound", "size": 60}, {"text":"young", "size": 60}, {"text":"round", "size": 60}, {"text":"doo", "size": 61}, {"text":"lil", "size": 61}, {"text":"everybody", "size": 61}, {"text":"dance", "size": 61}, {"text":"mo", "size": 61}, {"text":"life", "size": 63}, {"text":"came", "size": 63}, {"text":"till", "size": 63}, {"text":"knew", "size": 63}, {"text":"phone", "size": 64}, {"text":"tight", "size": 65}, {"text":"face", "size": 65}, {"text":"track", "size": 65}, {"text":"woo", "size": 65}, {"text":"couldn", "size": 65}, {"text":"duh", "size": 66}, {"text":"roll", "size": 66}, {"text":"minute", "size": 66}, {"text":"hard", "size": 67}, {"text":"heh", "size": 67}, {"text":"ma", "size": 67}, {"text":"sure", "size": 67}, {"text":"whoo", "size": 68}, {"text":"ride", "size": 70}, {"text":"broke", "size": 71}, {"text":"flow", "size": 71}, {"text":"ready", "size": 72}, {"text":"talkin", "size": 72}, {"text":"pop", "size": 75}, {"text":"left", "size": 75}, {"text":"damn", "size": 75}, {"text":"mon", "size": 75}, {"text":"bang", "size": 75}, {"text":"used", "size": 77}, {"text":"hold", "size": 77}, {"text":"live", "size": 78}, {"text":"misdemeanor", "size": 78}, {"text":"side", "size": 79}, {"text":"bitches", "size": 79}, {"text":"try", "size": 79}, {"text":"chick", "size": 79}, {"text":"fly", "size": 80}, {"text":"chorus", "size": 80}, {"text":"hee", "size": 80}, {"text":"talking", "size": 80}, {"text":"watch", "size": 80}, {"text":"house", "size": 82}, {"text":"low", "size": 82}, {"text":"kiss", "size": 82}, {"text":"leave", "size": 83}, {"text":"day", "size": 83}, {"text":"things", "size": 85}, {"text":"game", "size": 85}, {"text":"rock", "size": 85}, {"text":"best", "size": 86}, {"text":"high", "size": 86}, {"text":"tonight", "size": 86}, {"text":"head", "size": 88}, {"text":"ohh", "size": 90}, {"text":"body", "size": 90}, {"text":"home", "size": 90}, {"text":"stay", "size": 92}, {"text":"said", "size": 92}, {"text":"long", "size": 93}, {"text":"lookin", "size": 94}, {"text":"talk", "size": 94}, {"text":"gone", "size": 94}, {"text":"elliott", "size": 95}, {"text":"getcha", "size": 96}, {"text":"car", "size": 98}, {"text":"hear", "size": 98}, {"text":"remix", "size": 99}, {"text":"break", "size": 99}, {"text":"touch", "size": 101}, {"text":"repeat", "size": 102}, {"text":"yea", "size": 103}, {"text":"timbaland", "size": 104}, {"text":"uhh", "size": 105}, {"text":"run", "size": 105}, {"text":"check", "size": 105}, {"text":"people", "size": 108}, {"text":"ha", "size": 111}, {"text":"mind", "size": 112}, {"text":"dutch", "size": 113}, {"text":"bring", "size": 114}, {"text":"mma", "size": 114}, {"text":"little", "size": 115}, {"text":"dat", "size": 119}, {"text":"money", "size": 119}, {"text":"cuz", "size": 121}, {"text":"pass", "size": 122}, {"text":"music", "size": 123}, {"text":"big", "size": 125}, {"text":"really", "size": 125}, {"text":"ah", "size": 128}, {"text":"shake", "size": 128}, {"text":"club", "size": 128}, {"text":"party", "size": 131}, {"text":"yes", "size": 134}, {"text":"girls", "size": 135}, {"text":"drop", "size": 135}, {"text":"work", "size": 136}, {"text":"beat", "size": 142}, {"text":"ve", "size": 145}, {"text":"niggas", "size": 146}, {"text":"bout", "size": 148}, {"text":"show", "size": 150}, {"text":"freak", "size": 155}, {"text":"play", "size": 157}, {"text":"night", "size": 163}, {"text":"ass", "size": 164}, {"text":"gotta", "size": 166}, {"text":"won", "size": 166}, {"text":"look", "size": 168}, {"text":"new", "size": 168}, {"text":"crazy", "size": 171}, {"text":"wit", "size": 171}, {"text":"real", "size": 176}, {"text":"fuck", "size": 183}, {"text":"turn", "size": 184}, {"text":"hey", "size": 184}, {"text":"bad", "size": 185}, {"text":"better", "size": 185}, {"text":"good", "size": 186}, {"text":"gonna", "size": 186}, {"text":"think", "size": 189}, {"text":"ooh", "size": 193}, {"text":"feel", "size": 195}, {"text":"stop", "size": 200}, {"text":"tell", "size": 203}, {"text":"hot", "size": 209}, {"text":"gon", "size": 209}, {"text":"hit", "size": 217}, {"text":"huh", "size": 238}, {"text":"girl", "size": 239}, {"text":"need", "size": 241}, {"text":"way", "size": 250}, {"text":"da", "size": 263}, {"text":"right", "size": 263}, {"text":"nigga", "size": 267}, {"text":"bitch", "size": 274}, {"text":"boy", "size": 282}, {"text":"time", "size": 287}, {"text":"man", "size": 337}, {"text":"shit", "size": 341}, {"text":"want", "size": 355}, {"text":"come", "size": 423}, {"text":"cause", "size": 423}, {"text":"wanna", "size": 433}, {"text":"say", "size": 445}, {"text":"missy", "size": 450}, {"text":"just", "size": 451}, {"text":"baby", "size": 479}, {"text":"yo", "size": 492}, {"text":"make", "size": 509}, {"text":"ya", "size": 544}, {"text":"love", "size": 570}, {"text":"let", "size": 577}, {"text":"yeah", "size": 629}, {"text":"uh", "size": 731}, {"text":"know", "size": 753}, {"text":"oh", "size": 839}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/106662248&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "NWA",
    x: 1748/3281,
    r: 37790/130000,
    id: "nwa",
    gender: "male",
    race: "black",
    total_words: 37790,
    unique_words: 1748,
    average_grade_level: 0.069,
    word_length: 3.6,
    syllables_per_word: 1.54,
    one_syllable_words: 0.612,
    sentiment: -0.25,
    testVar: 0.21,
    text: "badonka donk donk",
    frequency: [
        {"text":"guess", "size": 14}, {"text":"turn", "size": 14}, {"text":"doctor", "size": 14}, {"text":"ride", "size": 14}, {"text":"rhymes", "size": 15}, {"text":"feel", "size": 15}, {"text":"talkin", "size": 15}, {"text":"couldn", "size": 15}, {"text":"flow", "size": 15}, {"text":"saying", "size": 15}, {"text":"came", "size": 15}, {"text":"breath", "size": 15}, {"text":"neighborhood", "size": 15}, {"text":"tried", "size": 15}, {"text":"left", "size": 15}, {"text":"nut", "size": 15}, {"text":"care", "size": 15}, {"text":"ha", "size": 15}, {"text":"kickin", "size": 16}, {"text":"rollin", "size": 16}, {"text":"rap", "size": 16}, {"text":"game", "size": 16}, {"text":"scared", "size": 16}, {"text":"taking", "size": 16}, {"text":"sample", "size": 16}, {"text":"talking", "size": 16}, {"text":"yellin", "size": 16}, {"text":"drop", "size": 16}, {"text":"dumb", "size": 16}, {"text":"lyrics", "size": 16}, {"text":"ve", "size": 16}, {"text":"check", "size": 16}, {"text":"talk", "size": 16}, {"text":"ball", "size": 16}, {"text":"bad", "size": 17}, {"text":"sound", "size": 17}, {"text":"word", "size": 17}, {"text":"fact", "size": 17}, {"text":"stay", "size": 17}, {"text":"gang", "size": 17}, {"text":"coz", "size": 17}, {"text":"boys", "size": 17}, {"text":"nothin", "size": 17}, {"text":"car", "size": 17}, {"text":"rolling", "size": 17}, {"text":"rock", "size": 17}, {"text":"ladies", "size": 17}, {"text":"paid", "size": 18}, {"text":"muthafuckin", "size": 18}, {"text":"shoot", "size": 18}, {"text":"mouth", "size": 18}, {"text":"thought", "size": 18}, {"text":"makes", "size": 18}, {"text":"bullshit", "size": 18}, {"text":"took", "size": 18}, {"text":"called", "size": 18}, {"text":"streets", "size": 18}, {"text":"smoke", "size": 18}, {"text":"homeboy", "size": 18}, {"text":"mic", "size": 18}, {"text":"pass", "size": 18}, {"text":"muthafucka", "size": 18}, {"text":"fool", "size": 18}, {"text":"shut", "size": 19}, {"text":"mind", "size": 19}, {"text":"head", "size": 19}, {"text":"die", "size": 19}, {"text":"young", "size": 19}, {"text":"place", "size": 19}, {"text":"minute", "size": 19}, {"text":"hand", "size": 19}, {"text":"brother", "size": 20}, {"text":"doin", "size": 20}, {"text":"hip", "size": 20}, {"text":"hood", "size": 20}, {"text":"pull", "size": 20}, {"text":"bust", "size": 20}, {"text":"kill", "size": 20}, {"text":"didn", "size": 21}, {"text":"getting", "size": 21}, {"text":"mean", "size": 21}, {"text":"sucker", "size": 21}, {"text":"fucking", "size": 21}, {"text":"crazy", "size": 21}, {"text":"hard", "size": 22}, {"text":"muthafucking", "size": 22}, {"text":"law", "size": 22}, {"text":"new", "size": 23}, {"text":"villain", "size": 23}, {"text":"mma", "size": 24}, {"text":"goin", "size": 24}, {"text":"everybody", "size": 24}, {"text":"big", "size": 24}, {"text":"step", "size": 24}, {"text":"listen", "size": 24}, {"text":"tha", "size": 24}, {"text":"started", "size": 25}, {"text":"home", "size": 25}, {"text":"oh", "size": 25}, {"text":"damn", "size": 26}, {"text":"outta", "size": 26}, {"text":"gun", "size": 26}, {"text":"panic", "size": 26}, {"text":"runnin", "size": 26}, {"text":"try", "size": 26}, {"text":"beat", "size": 26}, {"text":"better", "size": 27}, {"text":"record", "size": 27}, {"text":"somethin", "size": 27}, {"text":"zone", "size": 27}, {"text":"hear", "size": 27}, {"text":"stupid", "size": 27}, {"text":"show", "size": 28}, {"text":"play", "size": 28}, {"text":"cold", "size": 28}, {"text":"hey", "size": 28}, {"text":"hell", "size": 28}, {"text":"mothafuckin", "size": 28}, {"text":"love", "size": 28}, {"text":"sayin", "size": 28}, {"text":"fucked", "size": 28}, {"text":"face", "size": 29}, {"text":"baby", "size": 29}, {"text":"yella", "size": 29}, {"text":"life", "size": 29}, {"text":"drink", "size": 29}, {"text":"street", "size": 29}, {"text":"gangsta", "size": 29}, {"text":"punk", "size": 30}, {"text":"look", "size": 30}, {"text":"funky", "size": 30}, {"text":"won", "size": 31}, {"text":"need", "size": 31}, {"text":"ruthless", "size": 32}, {"text":"house", "size": 32}, {"text":"run", "size": 32}, {"text":"wit", "size": 32}, {"text":"ya", "size": 32}, {"text":"city", "size": 33}, {"text":"fuckin", "size": 33}, {"text":"people", "size": 33}, {"text":"pussy", "size": 34}, {"text":"gettin", "size": 35}, {"text":"cuz", "size": 35}, {"text":"suck", "size": 35}, {"text":"hit", "size": 35}, {"text":"start", "size": 36}, {"text":"ho", "size": 36}, {"text":"dope", "size": 36}, {"text":"girl", "size": 36}, {"text":"motherfuckers", "size": 38}, {"text":"good", "size": 39}, {"text":"motherfuckin", "size": 40}, {"text":"motherfucking", "size": 41}, {"text":"dr", "size": 43}, {"text":"ice", "size": 43}, {"text":"mc", "size": 44}, {"text":"little", "size": 45}, {"text":"gonna", "size": 45}, {"text":"cube", "size": 45}, {"text":"straight", "size": 46}, {"text":"kick", "size": 47}, {"text":"bitches", "size": 48}, {"text":"wanna", "size": 48}, {"text":"way", "size": 50}, {"text":"boy", "size": 51}, {"text":"black", "size": 52}, {"text":"right", "size": 52}, {"text":"time", "size": 53}, {"text":"come", "size": 56}, {"text":"motherfucker", "size": 56}, {"text":"gotta", "size": 59}, {"text":"said", "size": 61}, {"text":"money", "size": 61}, {"text":"tell", "size": 62}, {"text":"think", "size": 62}, {"text":"real", "size": 67}, {"text":"dopeman", "size": 68}, {"text":"police", "size": 69}, {"text":"want", "size": 70}, {"text":"compton", "size": 71}, {"text":"let", "size": 72}, {"text":"make", "size": 74}, {"text":"dick", "size": 79}, {"text":"say", "size": 84}, {"text":"eazy", "size": 86}, {"text":"yeah", "size": 103}, {"text":"man", "size": 106}, {"text":"ren", "size": 111}, {"text":"dre", "size": 120}, {"text":"just", "size": 131}, {"text":"ass", "size": 140}, {"text":"niggas", "size": 144}, {"text":"bitch", "size": 158}, {"text":"know", "size": 167}, {"text":"cause", "size": 218}, {"text":"shit", "size": 223}, {"text":"yo", "size": 247}, {"text":"nigga", "size": 256}, {"text":"fuck", "size": 296}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/32828287&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Run DMC",
    x: 1876/3281,
    r: 54078/130000,
    id: "run_dmc",
    gender: "male",
    race: "black",
    total_words: 54078,
    unique_words: 1876,
    average_grade_level: 0.051,
    word_length: 3.5,
    syllables_per_word: 1.3,
    one_syllable_words: 0.745,
    testVar: 0.21,
    text: "badonka donk donk",
    frequency: [
        {"text":"left", "size": 21}, {"text":"mean", "size": 21}, {"text":"open", "size": 21}, {"text":"fun", "size": 21}, {"text":"hobby", "size": 21}, {"text":"tryin", "size": 21}, {"text":"comes", "size": 21}, {"text":"scratched", "size": 22}, {"text":"faces", "size": 22}, {"text":"chill", "size": 22}, {"text":"told", "size": 22}, {"text":"wear", "size": 22}, {"text":"best", "size": 22}, {"text":"hands", "size": 22}, {"text":"yes", "size": 22}, {"text":"city", "size": 22}, {"text":"son", "size": 22}, {"text":"ill", "size": 22}, {"text":"straight", "size": 22}, {"text":"niggas", "size": 23}, {"text":"record", "size": 23}, {"text":"kind", "size": 23}, {"text":"mon", "size": 23}, {"text":"crazy", "size": 23}, {"text":"used", "size": 23}, {"text":"town", "size": 23}, {"text":"kings", "size": 23}, {"text":"live", "size": 24}, {"text":"inside", "size": 24}, {"text":"boy", "size": 24}, {"text":"duck", "size": 24}, {"text":"bass", "size": 24}, {"text":"dee", "size": 24}, {"text":"ahh", "size": 24}, {"text":"kid", "size": 24}, {"text":"took", "size": 24}, {"text":"bout", "size": 24}, {"text":"paid", "size": 25}, {"text":"jammin", "size": 25}, {"text":"goin", "size": 25}, {"text":"die", "size": 25}, {"text":"doin", "size": 25}, {"text":"microphone", "size": 25}, {"text":"homeboy", "size": 26}, {"text":"dream", "size": 26}, {"text":"long", "size": 26}, {"text":"shit", "size": 26}, {"text":"born", "size": 26}, {"text":"song", "size": 26}, {"text":"alright", "size": 26}, {"text":"went", "size": 26}, {"text":"end", "size": 26}, {"text":"ah", "size": 26}, {"text":"start", "size": 26}, {"text":"came", "size": 26}, {"text":"queens", "size": 27}, {"text":"times", "size": 27}, {"text":"knew", "size": 27}, {"text":"top", "size": 27}, {"text":"high", "size": 27}, {"text":"walk", "size": 27}, {"text":"cut", "size": 27}, {"text":"leave", "size": 27}, {"text":"diddy", "size": 28}, {"text":"home", "size": 28}, {"text":"makin", "size": 28}, {"text":"old", "size": 28}, {"text":"tr", "size": 28}, {"text":"night", "size": 28}, {"text":"stay", "size": 29}, {"text":"fly", "size": 29}, {"text":"darryl", "size": 29}, {"text":"joe", "size": 29}, {"text":"ha", "size": 29}, {"text":"god", "size": 29}, {"text":"shop", "size": 30}, {"text":"nigga", "size": 30}, {"text":"sound", "size": 30}, {"text":"job", "size": 30}, {"text":"lot", "size": 31}, {"text":"everybody", "size": 31}, {"text":"fresh", "size": 31}, {"text":"listen", "size": 31}, {"text":"mind", "size": 31}, {"text":"damn", "size": 31}, {"text":"rockin", "size": 31}, {"text":"seen", "size": 31}, {"text":"bad", "size": 32}, {"text":"def", "size": 32}, {"text":"chorus", "size": 32}, {"text":"music", "size": 32}, {"text":"half", "size": 32}, {"text":"going", "size": 33}, {"text":"til", "size": 33}, {"text":"cuts", "size": 33}, {"text":"funky", "size": 34}, {"text":"beats", "size": 34}, {"text":"shut", "size": 34}, {"text":"good", "size": 35}, {"text":"better", "size": 35}, {"text":"hear", "size": 35}, {"text":"livin", "size": 36}, {"text":"hey", "size": 36}, {"text":"crowd", "size": 36}, {"text":"gettin", "size": 36}, {"text":"flow", "size": 36}, {"text":"adidas", "size": 36}, {"text":"pause", "size": 36}, {"text":"school", "size": 37}, {"text":"dumb", "size": 37}, {"text":"riff", "size": 38}, {"text":"things", "size": 38}, {"text":"want", "size": 38}, {"text":"bring", "size": 38}, {"text":"brother", "size": 39}, {"text":"try", "size": 39}, {"text":"heard", "size": 39}, {"text":"mary", "size": 39}, {"text":"kick", "size": 40}, {"text":"funny", "size": 40}, {"text":"face", "size": 40}, {"text":"wreck", "size": 40}, {"text":"world", "size": 41}, {"text":"think", "size": 41}, {"text":"house", "size": 42}, {"text":"goes", "size": 42}, {"text":"life", "size": 42}, {"text":"cool", "size": 42}, {"text":"real", "size": 43}, {"text":"show", "size": 43}, {"text":"break", "size": 43}, {"text":"word", "size": 44}, {"text":"hollis", "size": 44}, {"text":"love", "size": 44}, {"text":"new", "size": 45}, {"text":"gonna", "size": 45}, {"text":"whoo", "size": 46}, {"text":"bust", "size": 46}, {"text":"roll", "size": 46}, {"text":"guitar", "size": 49}, {"text":"head", "size": 49}, {"text":"hit", "size": 49}, {"text":"black", "size": 50}, {"text":"comin", "size": 50}, {"text":"crew", "size": 50}, {"text":"place", "size": 50}, {"text":"big", "size": 50}, {"text":"girls", "size": 50}, {"text":"need", "size": 51}, {"text":"huh", "size": 51}, {"text":"wanna", "size": 52}, {"text":"couldn", "size": 52}, {"text":"party", "size": 52}, {"text":"gotta", "size": 52}, {"text":"cold", "size": 53}, {"text":"tell", "size": 53}, {"text":"suckers", "size": 54}, {"text":"play", "size": 55}, {"text":"rap", "size": 58}, {"text":"won", "size": 58}, {"text":"money", "size": 59}, {"text":"wait", "size": 60}, {"text":"check", "size": 61}, {"text":"sucker", "size": 62}, {"text":"girl", "size": 64}, {"text":"talk", "size": 66}, {"text":"people", "size": 72}, {"text":"right", "size": 73}, {"text":"day", "size": 74}, {"text":"dj", "size": 75}, {"text":"mic", "size": 75}, {"text":"ya", "size": 78}, {"text":"hell", "size": 78}, {"text":"hard", "size": 80}, {"text":"little", "size": 83}, {"text":"tricky", "size": 89}, {"text":"mc", "size": 89}, {"text":"rhymes", "size": 92}, {"text":"beat", "size": 93}, {"text":"stop", "size": 95}, {"text":"make", "size": 95}, {"text":"said", "size": 102}, {"text":"let", "size": 114}, {"text":"yeah", "size": 120}, {"text":"way", "size": 126}, {"text":"say", "size": 130}, {"text":"man", "size": 134}, {"text":"come", "size": 143}, {"text":"king", "size": 144}, {"text":"rhyme", "size": 146}, {"text":"time", "size": 149}, {"text":"jay", "size": 174}, {"text":"master", "size": 176}, {"text":"yo", "size": 179}, {"text":"jam", "size": 193}, {"text":"know", "size": 208}, {"text":"cause", "size": 209}, {"text":"just", "size": 229}, {"text":"run", "size": 326}, {"text":"rock", "size": 328}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96737368&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Salt-n-Pepa",
    x: 1738/3281,
    r: 34303/130000,
    id: "salt_n_pepa",
    gender: "female",
    race: "black",
    total_words: 34303,
    unique_words: 1738,
    average_grade_level: 0.084,
    word_length: 3.6,
    syllables_per_word: 1.34,
    one_syllable_words: 0.724,
    sentiment: -0.25,
    testVar: 0.21,
    text: "badonka donk donk",
    frequency: [
        {"text":"end", "size": 13}, {"text":"friends", "size": 13}, {"text":"sure", "size": 13}, {"text":"brand", "size": 13}, {"text":"leave", "size": 13}, {"text":"heaven", "size": 13}, {"text":"crowd", "size": 13}, {"text":"bass", "size": 13}, {"text":"listen", "size": 13}, {"text":"sucker", "size": 13}, {"text":"fade", "size": 13}, {"text":"ride", "size": 13}, {"text":"club", "size": 13}, {"text":"sayin", "size": 14}, {"text":"makes", "size": 14}, {"text":"fella", "size": 14}, {"text":"miss", "size": 14}, {"text":"sweat", "size": 14}, {"text":"thought", "size": 14}, {"text":"day", "size": 14}, {"text":"set", "size": 14}, {"text":"cause", "size": 14}, {"text":"heart", "size": 14}, {"text":"hop", "size": 14}, {"text":"nice", "size": 14}, {"text":"rap", "size": 14}, {"text":"beats", "size": 14}, {"text":"hip", "size": 14}, {"text":"sick", "size": 14}, {"text":"change", "size": 14}, {"text":"best", "size": 14}, {"text":"wear", "size": 14}, {"text":"didn", "size": 14}, {"text":"minute", "size": 15}, {"text":"gets", "size": 15}, {"text":"sisters", "size": 15}, {"text":"couldn", "size": 15}, {"text":"smooth", "size": 15}, {"text":"open", "size": 15}, {"text":"paid", "size": 15}, {"text":"guy", "size": 15}, {"text":"came", "size": 15}, {"text":"butt", "size": 15}, {"text":"lot", "size": 15}, {"text":"shit", "size": 16}, {"text":"fly", "size": 16}, {"text":"stay", "size": 16}, {"text":"dope", "size": 16}, {"text":"touch", "size": 16}, {"text":"place", "size": 16}, {"text":"heard", "size": 16}, {"text":"wrong", "size": 16}, {"text":"turn", "size": 16}, {"text":"comes", "size": 16}, {"text":"funky", "size": 16}, {"text":"bad", "size": 16}, {"text":"somebody", "size": 16}, {"text":"girls", "size": 17}, {"text":"run", "size": 17}, {"text":"care", "size": 17}, {"text":"eyes", "size": 17}, {"text":"forget", "size": 17}, {"text":"inside", "size": 17}, {"text":"flow", "size": 18}, {"text":"tight", "size": 18}, {"text":"home", "size": 18}, {"text":"shoop", "size": 18}, {"text":"comin", "size": 18}, {"text":"ready", "size": 18}, {"text":"express", "size": 18}, {"text":"fool", "size": 18}, {"text":"little", "size": 18}, {"text":"ha", "size": 18}, {"text":"business", "size": 18}, {"text":"dance", "size": 18}, {"text":"high", "size": 19}, {"text":"oooo", "size": 19}, {"text":"long", "size": 19}, {"text":"watch", "size": 19}, {"text":"ooh", "size": 19}, {"text":"men", "size": 19}, {"text":"rhyme", "size": 19}, {"text":"mean", "size": 20}, {"text":"house", "size": 20}, {"text":"shake", "size": 20}, {"text":"tried", "size": 20}, {"text":"head", "size": 20}, {"text":"rhymes", "size": 20}, {"text":"brother", "size": 21}, {"text":"wait", "size": 21}, {"text":"night", "size": 21}, {"text":"crazy", "size": 21}, {"text":"money", "size": 21}, {"text":"things", "size": 22}, {"text":"face", "size": 22}, {"text":"livin", "size": 22}, {"text":"strong", "size": 22}, {"text":"ho", "size": 22}, {"text":"drop", "size": 22}, {"text":"understand", "size": 22}, {"text":"ah", "size": 23}, {"text":"hit", "size": 23}, {"text":"really", "size": 23}, {"text":"world", "size": 23}, {"text":"denton", "size": 23}, {"text":"sandra", "size": 23}, {"text":"kick", "size": 23}, {"text":"beat", "size": 24}, {"text":"tryin", "size": 24}, {"text":"show", "size": 24}, {"text":"try", "size": 24}, {"text":"damn", "size": 24}, {"text":"mad", "size": 26}, {"text":"funk", "size": 26}, {"text":"true", "size": 26}, {"text":"god", "size": 26}, {"text":"start", "size": 27}, {"text":"hell", "size": 27}, {"text":"gamin", "size": 27}, {"text":"spinderella", "size": 28}, {"text":"people", "size": 28}, {"text":"new", "size": 28}, {"text":"push", "size": 29}, {"text":"look", "size": 29}, {"text":"won", "size": 29}, {"text":"break", "size": 29}, {"text":"work", "size": 29}, {"text":"music", "size": 30}, {"text":"james", "size": 31}, {"text":"check", "size": 31}, {"text":"hot", "size": 31}, {"text":"goin", "size": 32}, {"text":"rock", "size": 32}, {"text":"huh", "size": 32}, {"text":"beautiful", "size": 33}, {"text":"hard", "size": 33}, {"text":"big", "size": 33}, {"text":"ve", "size": 33}, {"text":"cheryl", "size": 33}, {"text":"gettin", "size": 34}, {"text":"boy", "size": 34}, {"text":"hey", "size": 34}, {"text":"word", "size": 34}, {"text":"groove", "size": 35}, {"text":"artist", "size": 35}, {"text":"album", "size": 35}, {"text":"pep", "size": 35}, {"text":"mic", "size": 36}, {"text":"feel", "size": 36}, {"text":"gonna", "size": 37}, {"text":"everybody", "size": 38}, {"text":"nothin", "size": 40}, {"text":"gotta", "size": 41}, {"text":"mind", "size": 41}, {"text":"live", "size": 41}, {"text":"stop", "size": 41}, {"text":"believe", "size": 42}, {"text":"real", "size": 42}, {"text":"party", "size": 42}, {"text":"girl", "size": 43}, {"text":"independent", "size": 45}, {"text":"song", "size": 45}, {"text":"play", "size": 45}, {"text":"think", "size": 45}, {"text":"said", "size": 46}, {"text":"way", "size": 48}, {"text":"life", "size": 49}, {"text":"better", "size": 49}, {"text":"need", "size": 51}, {"text":"magic", "size": 52}, {"text":"oh", "size": 53}, {"text":"want", "size": 53}, {"text":"talk", "size": 53}, {"text":"black", "size": 57}, {"text":"hold", "size": 58}, {"text":"sex", "size": 61}, {"text":"yes", "size": 62}, {"text":"body", "size": 67}, {"text":"tell", "size": 68}, {"text":"uh", "size": 72}, {"text":"love", "size": 73}, {"text":"say", "size": 82}, {"text":"yo", "size": 85}, {"text":"good", "size": 89}, {"text":"make", "size": 90}, {"text":"time", "size": 95}, {"text":"wanna", "size": 105}, {"text":"right", "size": 106}, {"text":"chorus", "size": 113}, {"text":"come", "size": 123}, {"text":"ya", "size": 126}, {"text":"just", "size": 126}, {"text":"pepa", "size": 126}, {"text":"baby", "size": 131}, {"text":"cuz", "size": 132}, {"text":"salt", "size": 152}, {"text":"yeah", "size": 157}, {"text":"man", "size": 161}, {"text":"let", "size": 165}, {"text":"know", "size": 180}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/55430301&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    // 
    name: "Slick Rick",
    x: 2177/3281,
    r: 45671/130000,
    id: "slick_rick",
    gender: "male",
    race: "black",
    total_words: 45671,
    unique_words: 2177,
    average_grade_level: 0.087,
    word_length: 3.7,
    syllables_per_word: 1.56,
    testVar: 0.21,
    one_syllable_words: 0.601,
    frequency: [
        {"text":"jam", "size": 17}, {"text":"top", "size": 17}, {"text":"slow", "size": 17}, {"text":"sure", "size": 17}, {"text":"kinda", "size": 17}, {"text":"wanted", "size": 17}, {"text":"friends", "size": 17}, {"text":"cats", "size": 17}, {"text":"deep", "size": 17}, {"text":"lookin", "size": 17}, {"text":"told", "size": 18}, {"text":"high", "size": 18}, {"text":"fat", "size": 18}, {"text":"lady", "size": 18}, {"text":"woman", "size": 18}, {"text":"cash", "size": 18}, {"text":"gave", "size": 18}, {"text":"ho", "size": 18}, {"text":"caught", "size": 18}, {"text":"getting", "size": 18}, {"text":"shorty", "size": 18}, {"text":"hell", "size": 18}, {"text":"figure", "size": 18}, {"text":"kept", "size": 18}, {"text":"play", "size": 18}, {"text":"act", "size": 18}, {"text":"til", "size": 18}, {"text":"won", "size": 19}, {"text":"sex", "size": 19}, {"text":"sound", "size": 19}, {"text":"remember", "size": 19}, {"text":"dead", "size": 19}, {"text":"listen", "size": 19}, {"text":"tryin", "size": 19}, {"text":"murder", "size": 19}, {"text":"finally", "size": 19}, {"text":"hands", "size": 19}, {"text":"started", "size": 20}, {"text":"hold", "size": 20}, {"text":"uhh", "size": 20}, {"text":"school", "size": 20}, {"text":"wasn", "size": 20}, {"text":"left", "size": 20}, {"text":"away", "size": 20}, {"text":"eyes", "size": 20}, {"text":"fly", "size": 20}, {"text":"trapped", "size": 20}, {"text":"heart", "size": 20}, {"text":"night", "size": 21}, {"text":"feel", "size": 21}, {"text":"car", "size": 21}, {"text":"doug", "size": 21}, {"text":"head", "size": 21}, {"text":"help", "size": 21}, {"text":"work", "size": 21}, {"text":"hoes", "size": 21}, {"text":"lot", "size": 21}, {"text":"face", "size": 21}, {"text":"game", "size": 22}, {"text":"hurt", "size": 22}, {"text":"men", "size": 22}, {"text":"story", "size": 22}, {"text":"kiss", "size": 23}, {"text":"friend", "size": 23}, {"text":"change", "size": 23}, {"text":"hear", "size": 23}, {"text":"di", "size": 23}, {"text":"beat", "size": 23}, {"text":"chick", "size": 23}, {"text":"scratched", "size": 23}, {"text":"believe", "size": 23}, {"text":"chill", "size": 23}, {"text":"trying", "size": 23}, {"text":"long", "size": 23}, {"text":"middle", "size": 23}, {"text":"gettin", "size": 24}, {"text":"white", "size": 24}, {"text":"fine", "size": 24}, {"text":"talk", "size": 24}, {"text":"mind", "size": 24}, {"text":"style", "size": 24}, {"text":"stupid", "size": 25}, {"text":"black", "size": 25}, {"text":"tried", "size": 25}, {"text":"kill", "size": 25}, {"text":"treat", "size": 26}, {"text":"cat", "size": 26}, {"text":"cut", "size": 26}, {"text":"live", "size": 26}, {"text":"couldn", "size": 26}, {"text":"show", "size": 27}, {"text":"hard", "size": 27}, {"text":"nice", "size": 27}, {"text":"bout", "size": 27}, {"text":"bad", "size": 27}, {"text":"rapper", "size": 28}, {"text":"ve", "size": 28}, {"text":"home", "size": 28}, {"text":"type", "size": 28}, {"text":"party", "size": 28}, {"text":"heard", "size": 28}, {"text":"seen", "size": 28}, {"text":"lil", "size": 29}, {"text":"god", "size": 29}, {"text":"scratching", "size": 29}, {"text":"used", "size": 29}, {"text":"yes", "size": 30}, {"text":"people", "size": 30}, {"text":"walk", "size": 30}, {"text":"thought", "size": 30}, {"text":"brother", "size": 30}, {"text":"house", "size": 30}, {"text":"bars", "size": 30}, {"text":"came", "size": 31}, {"text":"son", "size": 31}, {"text":"true", "size": 31}, {"text":"things", "size": 31}, {"text":"turn", "size": 31}, {"text":"really", "size": 32}, {"text":"bring", "size": 32}, {"text":"mean", "size": 32}, {"text":"try", "size": 32}, {"text":"took", "size": 33}, {"text":"old", "size": 34}, {"text":"mad", "size": 35}, {"text":"honey", "size": 35}, {"text":"best", "size": 35}, {"text":"gets", "size": 35}, {"text":"king", "size": 36}, {"text":"word", "size": 36}, {"text":"wrong", "size": 37}, {"text":"young", "size": 37}, {"text":"niggas", "size": 37}, {"text":"new", "size": 37}, {"text":"need", "size": 38}, {"text":"real", "size": 39}, {"text":"hot", "size": 40}, {"text":"chorus", "size": 41}, {"text":"behind", "size": 41}, {"text":"better", "size": 41}, {"text":"huh", "size": 41}, {"text":"stop", "size": 41}, {"text":"kids", "size": 42}, {"text":"check", "size": 42}, {"text":"girls", "size": 42}, {"text":"rock", "size": 44}, {"text":"big", "size": 44}, {"text":"think", "size": 44}, {"text":"little", "size": 44}, {"text":"start", "size": 44}, {"text":"money", "size": 45}, {"text":"boy", "size": 46}, {"text":"fresh", "size": 46}, {"text":"went", "size": 47}, {"text":"ruler", "size": 48}, {"text":"fuck", "size": 48}, {"text":"look", "size": 51}, {"text":"hit", "size": 52}, {"text":"wanna", "size": 54}, {"text":"ass", "size": 54}, {"text":"uh", "size": 56}, {"text":"bitch", "size": 56}, {"text":"want", "size": 60}, {"text":"life", "size": 61}, {"text":"wit", "size": 61}, {"text":"didn", "size": 61}, {"text":"cuz", "size": 61}, {"text":"hey", "size": 62}, {"text":"baby", "size": 62}, {"text":"day", "size": 64}, {"text":"good", "size": 64}, {"text":"rap", "size": 67}, {"text":"ricky", "size": 67}, {"text":"right", "size": 68}, {"text":"gonna", "size": 68}, {"text":"world", "size": 71}, {"text":"time", "size": 75}, {"text":"tell", "size": 76}, {"text":"yo", "size": 80}, {"text":"say", "size": 81}, {"text":"ya", "size": 85}, {"text":"way", "size": 85}, {"text":"shit", "size": 86}, {"text":"cause", "size": 86}, {"text":"nigga", "size": 87}, {"text":"let", "size": 89}, {"text":"oh", "size": 89}, {"text":"yeah", "size": 93}, {"text":"make", "size": 93}, {"text":"kid", "size": 98}, {"text":"slick", "size": 98}, {"text":"come", "size": 101}, {"text":"girl", "size": 102}, {"text":"run", "size": 103}, {"text":"love", "size": 110}, {"text":"man", "size": 112}, {"text":"just", "size": 120}, {"text":"said", "size": 151}, {"text":"know", "size": 188}, {"text":"rick", "size": 201}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/111487943&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Snoop Dogg",
    x: 1781/3281,
    r: 415059/130000,
    id: "snoop_dogg",
    gender: "male",
    race: "black",
    total_words: 415059,
    unique_words: 1781,
    average_grade_level: 0.089,
    word_length: 3.6,
    syllables_per_word: 1.34,
    one_syllable_words: 0.718,
    sentiment: -0.25,
    testVar: 0.21,
    frequency: [
        {"text":"bounce", "size": 146}, {"text":"somethin", "size": 147}, {"text":"wow", "size": 147}, {"text":"verse", "size": 148}, {"text":"mo", "size": 149}, {"text":"nothin", "size": 149}, {"text":"blow", "size": 151}, {"text":"ask", "size": 153}, {"text":"change", "size": 153}, {"text":"yes", "size": 154}, {"text":"hand", "size": 154}, {"text":"hook", "size": 155}, {"text":"city", "size": 155}, {"text":"east", "size": 156}, {"text":"eastside", "size": 156}, {"text":"limit", "size": 157}, {"text":"eyes", "size": 157}, {"text":"comin", "size": 158}, {"text":"hell", "size": 158}, {"text":"thought", "size": 159}, {"text":"trip", "size": 160}, {"text":"didn", "size": 162}, {"text":"old", "size": 163}, {"text":"pimp", "size": 163}, {"text":"til", "size": 164}, {"text":"shake", "size": 165}, {"text":"boom", "size": 166}, {"text":"rap", "size": 166}, {"text":"work", "size": 167}, {"text":"mean", "size": 167}, {"text":"people", "size": 167}, {"text":"talkin", "size": 167}, {"text":"boss", "size": 168}, {"text":"hear", "size": 168}, {"text":"heard", "size": 169}, {"text":"rollin", "size": 169}, {"text":"face", "size": 171}, {"text":"used", "size": 172}, {"text":"club", "size": 172}, {"text":"slow", "size": 175}, {"text":"cold", "size": 176}, {"text":"die", "size": 178}, {"text":"mouth", "size": 178}, {"text":"best", "size": 180}, {"text":"street", "size": 184}, {"text":"na", "size": 185}, {"text":"huh", "size": 185}, {"text":"beach", "size": 186}, {"text":"lookin", "size": 188}, {"text":"da", "size": 189}, {"text":"ve", "size": 189}, {"text":"lot", "size": 191}, {"text":"live", "size": 192}, {"text":"fool", "size": 193}, {"text":"gone", "size": 195}, {"text":"lil", "size": 195}, {"text":"blue", "size": 198}, {"text":"set", "size": 199}, {"text":"young", "size": 200}, {"text":"fly", "size": 201}, {"text":"away", "size": 201}, {"text":"hold", "size": 202}, {"text":"la", "size": 206}, {"text":"break", "size": 207}, {"text":"hot", "size": 208}, {"text":"bust", "size": 209}, {"text":"top", "size": 210}, {"text":"everybody", "size": 214}, {"text":"heat", "size": 216}, {"text":"home", "size": 216}, {"text":"goin", "size": 216}, {"text":"came", "size": 217}, {"text":"pussy", "size": 219}, {"text":"dog", "size": 219}, {"text":"straight", "size": 219}, {"text":"drop", "size": 220}, {"text":"crazy", "size": 221}, {"text":"throw", "size": 221}, {"text":"doin", "size": 224}, {"text":"ready", "size": 225}, {"text":"walk", "size": 226}, {"text":"told", "size": 227}, {"text":"fo", "size": 228}, {"text":"bring", "size": 231}, {"text":"damn", "size": 236}, {"text":"weed", "size": 237}, {"text":"light", "size": 238}, {"text":"night", "size": 239}, {"text":"turn", "size": 239}, {"text":"streets", "size": 242}, {"text":"try", "size": 242}, {"text":"side", "size": 244}, {"text":"homies", "size": 246}, {"text":"gang", "size": 247}, {"text":"thang", "size": 250}, {"text":"leave", "size": 250}, {"text":"watch", "size": 253}, {"text":"check", "size": 259}, {"text":"mind", "size": 262}, {"text":"black", "size": 265}, {"text":"talk", "size": 269}, {"text":"tryin", "size": 270}, {"text":"homie", "size": 272}, {"text":"beat", "size": 273}, {"text":"won", "size": 274}, {"text":"high", "size": 276}, {"text":"head", "size": 277}, {"text":"low", "size": 278}, {"text":"nah", "size": 278}, {"text":"pop", "size": 279}, {"text":"girls", "size": 280}, {"text":"doggy", "size": 283}, {"text":"motherfucker", "size": 284}, {"text":"run", "size": 284}, {"text":"ha", "size": 284}, {"text":"house", "size": 285}, {"text":"dick", "size": 286}, {"text":"bad", "size": 288}, {"text":"really", "size": 293}, {"text":"mma", "size": 294}, {"text":"motherfuckin", "size": 296}, {"text":"show", "size": 301}, {"text":"coast", "size": 303}, {"text":"new", "size": 315}, {"text":"gonna", "size": 317}, {"text":"chorus", "size": 322}, {"text":"pound", "size": 322}, {"text":"play", "size": 322}, {"text":"long", "size": 322}, {"text":"world", "size": 331}, {"text":"feel", "size": 332}, {"text":"hey", "size": 338}, {"text":"said", "size": 342}, {"text":"think", "size": 345}, {"text":"hard", "size": 346}, {"text":"smoke", "size": 349}, {"text":"party", "size": 349}, {"text":"stay", "size": 351}, {"text":"bang", "size": 356}, {"text":"fuckin", "size": 357}, {"text":"little", "size": 366}, {"text":"roll", "size": 369}, {"text":"cuz", "size": 377}, {"text":"double", "size": 379}, {"text":"day", "size": 381}, {"text":"good", "size": 381}, {"text":"gettin", "size": 393}, {"text":"better", "size": 394}, {"text":"uh", "size": 396}, {"text":"boy", "size": 399}, {"text":"look", "size": 405}, {"text":"ho", "size": 407}, {"text":"hood", "size": 409}, {"text":"west", "size": 411}, {"text":"bout", "size": 434}, {"text":"hoes", "size": 463}, {"text":"stop", "size": 463}, {"text":"gotta", "size": 464}, {"text":"rock", "size": 465}, {"text":"wit", "size": 465}, {"text":"ride", "size": 479}, {"text":"need", "size": 507}, {"text":"gon", "size": 513}, {"text":"want", "size": 555}, {"text":"girl", "size": 559}, {"text":"hit", "size": 564}, {"text":"life", "size": 602}, {"text":"bitches", "size": 608}, {"text":"way", "size": 624}, {"text":"gangsta", "size": 642}, {"text":"ass", "size": 653}, {"text":"tell", "size": 656}, {"text":"big", "size": 660}, {"text":"money", "size": 698}, {"text":"real", "size": 715}, {"text":"game", "size": 735}, {"text":"time", "size": 745}, {"text":"oh", "size": 751}, {"text":"yo", "size": 764}, {"text":"man", "size": 772}, {"text":"baby", "size": 796}, {"text":"come", "size": 806}, {"text":"right", "size": 809}, {"text":"say", "size": 934}, {"text":"love", "size": 937}, {"text":"make", "size": 994}, {"text":"wanna", "size": 1027}, {"text":"fuck", "size": 1202}, {"text":"let", "size": 1238}, {"text":"ya", "size": 1320}, {"text":"just", "size": 1327}, {"text":"cause", "size": 1330}, {"text":"bitch", "size": 1369}, {"text":"snoop", "size": 1391}, {"text":"dogg", "size": 1545}, {"text":"yeah", "size": 1581}, {"text":"shit", "size": 1585}, {"text":"niggas", "size": 1855}, {"text":"know", "size": 2165}, {"text":"nigga", "size": 2525}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/90032186&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Talib Kweli",
    x: 2099/3281,
    r: 191220/130000,
    id: "talib_kweli",
    gender: "male",
    race: "black",
    total_words: 191220,
    unique_words: 2099,
    average_grade_level: 0.106,
    word_length: 3.8,
    syllables_per_word: 1.38,
    one_syllable_words: 0.705,
    sentiment: -0.25,
    testVar: 0.21,
    frequency: [
        {"text":"pay", "size": 61}, {"text":"sky", "size": 62}, {"text":"old", "size": 62}, {"text":"red", "size": 63}, {"text":"gun", "size": 63}, {"text":"song", "size": 63}, {"text":"da", "size": 63}, {"text":"line", "size": 64}, {"text":"eye", "size": 65}, {"text":"heard", "size": 65}, {"text":"dead", "size": 65}, {"text":"ba", "size": 65}, {"text":"damn", "size": 65}, {"text":"open", "size": 66}, {"text":"catch", "size": 66}, {"text":"young", "size": 67}, {"text":"shot", "size": 67}, {"text":"respect", "size": 67}, {"text":"style", "size": 68}, {"text":"goin", "size": 68}, {"text":"things", "size": 69}, {"text":"blow", "size": 69}, {"text":"inside", "size": 70}, {"text":"boy", "size": 70}, {"text":"white", "size": 70}, {"text":"mean", "size": 70}, {"text":"yes", "size": 71}, {"text":"wack", "size": 71}, {"text":"war", "size": 72}, {"text":"hey", "size": 72}, {"text":"livin", "size": 72}, {"text":"seen", "size": 73}, {"text":"kill", "size": 73}, {"text":"won", "size": 73}, {"text":"straight", "size": 73}, {"text":"leave", "size": 73}, {"text":"thought", "size": 74}, {"text":"plus", "size": 74}, {"text":"tryin", "size": 75}, {"text":"hands", "size": 75}, {"text":"drop", "size": 75}, {"text":"bitch", "size": 75}, {"text":"mc", "size": 75}, {"text":"hand", "size": 76}, {"text":"cops", "size": 77}, {"text":"long", "size": 77}, {"text":"write", "size": 78}, {"text":"air", "size": 79}, {"text":"ghetto", "size": 79}, {"text":"crack", "size": 79}, {"text":"living", "size": 79}, {"text":"hell", "size": 79}, {"text":"streets", "size": 79}, {"text":"lot", "size": 80}, {"text":"hate", "size": 80}, {"text":"bring", "size": 80}, {"text":"free", "size": 80}, {"text":"top", "size": 80}, {"text":"bout", "size": 81}, {"text":"house", "size": 81}, {"text":"gone", "size": 82}, {"text":"change", "size": 82}, {"text":"track", "size": 82}, {"text":"true", "size": 82}, {"text":"looking", "size": 83}, {"text":"mon", "size": 85}, {"text":"place", "size": 86}, {"text":"jump", "size": 86}, {"text":"watch", "size": 86}, {"text":"listen", "size": 86}, {"text":"body", "size": 87}, {"text":"play", "size": 87}, {"text":"death", "size": 87}, {"text":"fight", "size": 88}, {"text":"ready", "size": 88}, {"text":"going", "size": 88}, {"text":"break", "size": 88}, {"text":"hood", "size": 88}, {"text":"getting", "size": 88}, {"text":"cats", "size": 90}, {"text":"walk", "size": 90}, {"text":"rhyme", "size": 90}, {"text":"head", "size": 90}, {"text":"rhymes", "size": 91}, {"text":"turn", "size": 91}, {"text":"used", "size": 92}, {"text":"blood", "size": 93}, {"text":"trying", "size": 93}, {"text":"home", "size": 93}, {"text":"eyes", "size": 94}, {"text":"ass", "size": 94}, {"text":"son", "size": 94}, {"text":"wit", "size": 95}, {"text":"check", "size": 95}, {"text":"everybody", "size": 98}, {"text":"block", "size": 98}, {"text":"street", "size": 98}, {"text":"words", "size": 99}, {"text":"start", "size": 99}, {"text":"kids", "size": 99}, {"text":"die", "size": 101}, {"text":"away", "size": 101}, {"text":"hip", "size": 101}, {"text":"soul", "size": 102}, {"text":"night", "size": 102}, {"text":"oh", "size": 106}, {"text":"la", "size": 106}, {"text":"best", "size": 107}, {"text":"girl", "size": 107}, {"text":"gon", "size": 109}, {"text":"talk", "size": 109}, {"text":"left", "size": 109}, {"text":"light", "size": 110}, {"text":"heart", "size": 111}, {"text":"work", "size": 111}, {"text":"til", "size": 111}, {"text":"hold", "size": 111}, {"text":"sound", "size": 111}, {"text":"rappers", "size": 111}, {"text":"cuz", "size": 113}, {"text":"gonna", "size": 113}, {"text":"fly", "size": 113}, {"text":"truth", "size": 114}, {"text":"hop", "size": 115}, {"text":"came", "size": 117}, {"text":"hear", "size": 117}, {"text":"little", "size": 118}, {"text":"york", "size": 121}, {"text":"yea", "size": 121}, {"text":"show", "size": 122}, {"text":"word", "size": 122}, {"text":"run", "size": 127}, {"text":"hot", "size": 127}, {"text":"really", "size": 128}, {"text":"ve", "size": 129}, {"text":"mind", "size": 129}, {"text":"brooklyn", "size": 130}, {"text":"mother", "size": 134}, {"text":"city", "size": 135}, {"text":"face", "size": 136}, {"text":"money", "size": 136}, {"text":"stand", "size": 136}, {"text":"high", "size": 140}, {"text":"big", "size": 140}, {"text":"look", "size": 145}, {"text":"spit", "size": 146}, {"text":"beat", "size": 146}, {"text":"hard", "size": 146}, {"text":"flow", "size": 146}, {"text":"good", "size": 148}, {"text":"set", "size": 148}, {"text":"hit", "size": 151}, {"text":"god", "size": 152}, {"text":"said", "size": 156}, {"text":"music", "size": 158}, {"text":"think", "size": 163}, {"text":"day", "size": 164}, {"text":"world", "size": 164}, {"text":"game", "size": 165}, {"text":"uh", "size": 166}, {"text":"talib", "size": 167}, {"text":"live", "size": 175}, {"text":"better", "size": 175}, {"text":"stay", "size": 182}, {"text":"rap", "size": 182}, {"text":"tell", "size": 184}, {"text":"real", "size": 187}, {"text":"try", "size": 191}, {"text":"baby", "size": 194}, {"text":"rock", "size": 194}, {"text":"want", "size": 199}, {"text":"feel", "size": 212}, {"text":"fuck", "size": 225}, {"text":"stop", "size": 230}, {"text":"need", "size": 244}, {"text":"ya", "size": 250}, {"text":"gotta", "size": 254}, {"text":"wanna", "size": 269}, {"text":"black", "size": 297}, {"text":"new", "size": 320}, {"text":"way", "size": 320}, {"text":"kweli", "size": 333}, {"text":"come", "size": 348}, {"text":"people", "size": 375}, {"text":"right", "size": 375}, {"text":"nigga", "size": 383}, {"text":"time", "size": 390}, {"text":"say", "size": 411}, {"text":"life", "size": 416}, {"text":"cause", "size": 441}, {"text":"man", "size": 463}, {"text":"let", "size": 477}, {"text":"shit", "size": 486}, {"text":"niggas", "size": 489}, {"text":"love", "size": 507}, {"text":"yeah", "size": 511}, {"text":"make", "size": 514}, {"text":"yo", "size": 524}, {"text":"know", "size": 701}, {"text":"just", "size": 758}

        ],
    song: "<iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/90450572&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    // 
    name: "The Streets",
    x: 1986/3281,
    r: 18721/130000,
    id: "the_streets",
    gender: "male",
    race: "white",
    average_grade_level: 0.084,
    word_length: 3.6,
    syllables_per_word: 1.33,
    sentiment: -0.25,
    testVar: 0.21,
    total_words: 18721,
    unique_words: 1986,
    one_syllable_words: 0.721,
    frequency: [
        {"text":"reason", "size": 12}, {"text":"deal", "size": 12}, {"text":"chorus", "size": 12}, {"text":"feeling", "size": 12}, {"text":"white", "size": 12}, {"text":"morning", "size": 12}, {"text":"days", "size": 12}, {"text":"check", "size": 12}, {"text":"pretty", "size": 12}, {"text":"touch", "size": 12}, {"text":"black", "size": 12}, {"text":"dem", "size": 12}, {"text":"body", "size": 12}, {"text":"times", "size": 12}, {"text":"looks", "size": 12}, {"text":"wrong", "size": 12}, {"text":"fly", "size": 12}, {"text":"came", "size": 13}, {"text":"fit", "size": 13}, {"text":"old", "size": 13}, {"text":"top", "size": 13}, {"text":"baby", "size": 13}, {"text":"door", "size": 13}, {"text":"lot", "size": 13}, {"text":"ugghh", "size": 13}, {"text":"remember", "size": 13}, {"text":"chance", "size": 13}, {"text":"sky", "size": 13}, {"text":"beats", "size": 13}, {"text":"lights", "size": 13}, {"text":"blink", "size": 13}, {"text":"quick", "size": 13}, {"text":"walking", "size": 13}, {"text":"road", "size": 13}, {"text":"swag", "size": 14}, {"text":"trust", "size": 14}, {"text":"low", "size": 14}, {"text":"talking", "size": 14}, {"text":"mum", "size": 14}, {"text":"home", "size": 14}, {"text":"car", "size": 14}, {"text":"felt", "size": 14}, {"text":"watching", "size": 14}, {"text":"actually", "size": 14}, {"text":"line", "size": 15}, {"text":"bet", "size": 15}, {"text":"dog", "size": 15}, {"text":"word", "size": 15}, {"text":"floor", "size": 15}, {"text":"listen", "size": 15}, {"text":"behind", "size": 15}, {"text":"roll", "size": 15}, {"text":"started", "size": 15}, {"text":"saying", "size": 15}, {"text":"talk", "size": 15}, {"text":"told", "size": 16}, {"text":"house", "size": 16}, {"text":"goes", "size": 16}, {"text":"pop", "size": 16}, {"text":"boy", "size": 16}, {"text":"break", "size": 16}, {"text":"bitch", "size": 16}, {"text":"past", "size": 16}, {"text":"beat", "size": 16}, {"text":"game", "size": 16}, {"text":"pull", "size": 16}, {"text":"bad", "size": 16}, {"text":"mates", "size": 16}, {"text":"work", "size": 16}, {"text":"club", "size": 16}, {"text":"sit", "size": 16}, {"text":"hell", "size": 17}, {"text":"mean", "size": 17}, {"text":"yer", "size": 17}, {"text":"geezers", "size": 17}, {"text":"dance", "size": 17}, {"text":"change", "size": 17}, {"text":"buy", "size": 17}, {"text":"side", "size": 17}, {"text":"believe", "size": 17}, {"text":"mike", "size": 17}, {"text":"fight", "size": 17}, {"text":"fresh", "size": 17}, {"text":"couldn", "size": 17}, {"text":"fucked", "size": 17}, {"text":"mad", "size": 17}, {"text":"ma", "size": 17}, {"text":"stand", "size": 17}, {"text":"light", "size": 17}, {"text":"street", "size": 17}, {"text":"yes", "size": 18}, {"text":"hear", "size": 18}, {"text":"hold", "size": 18}, {"text":"pay", "size": 18}, {"text":"nice", "size": 18}, {"text":"hard", "size": 18}, {"text":"ask", "size": 18}, {"text":"bar", "size": 18}, {"text":"til", "size": 18}, {"text":"walk", "size": 18}, {"text":"easy", "size": 18}, {"text":"care", "size": 18}, {"text":"fall", "size": 18}, {"text":"gotta", "size": 18}, {"text":"real", "size": 19}, {"text":"lost", "size": 19}, {"text":"mate", "size": 19}, {"text":"drink", "size": 19}, {"text":"watch", "size": 20}, {"text":"play", "size": 20}, {"text":"yea", "size": 20}, {"text":"step", "size": 20}, {"text":"start", "size": 21}, {"text":"looked", "size": 21}, {"text":"wish", "size": 21}, {"text":"run", "size": 21}, {"text":"thought", "size": 22}, {"text":"better", "size": 22}, {"text":"place", "size": 23}, {"text":"wanna", "size": 23}, {"text":"try", "size": 23}, {"text":"straight", "size": 23}, {"text":"show", "size": 23}, {"text":"stay", "size": 23}, {"text":"maybe", "size": 24}, {"text":"mind", "size": 24}, {"text":"trying", "size": 24}, {"text":"looking", "size": 24}, {"text":"big", "size": 24}, {"text":"end", "size": 24}, {"text":"hand", "size": 25}, {"text":"late", "size": 25}, {"text":"yo", "size": 26}, {"text":"streets", "size": 26}, {"text":"didn", "size": 26}, {"text":"turn", "size": 26}, {"text":"won", "size": 27}, {"text":"round", "size": 27}, {"text":"getting", "size": 28}, {"text":"phone", "size": 28}, {"text":"leave", "size": 28}, {"text":"tv", "size": 30}, {"text":"left", "size": 30}, {"text":"face", "size": 30}, {"text":"feel", "size": 30}, {"text":"best", "size": 30}, {"text":"oh", "size": 30}, {"text":"good", "size": 31}, {"text":"head", "size": 32}, {"text":"new", "size": 32}, {"text":"world", "size": 32}, {"text":"nigga", "size": 32}, {"text":"really", "size": 33}, {"text":"dougie", "size": 33}, {"text":"going", "size": 34}, {"text":"night", "size": 34}, {"text":"thinking", "size": 35}, {"text":"stop", "size": 36}, {"text":"fuck", "size": 36}, {"text":"dat", "size": 36}, {"text":"gonna", "size": 36}, {"text":"little", "size": 37}, {"text":"niggas", "size": 37}, {"text":"fucking", "size": 38}, {"text":"things", "size": 39}, {"text":"come", "size": 40}, {"text":"hit", "size": 40}, {"text":"away", "size": 41}, {"text":"eyes", "size": 42}, {"text":"girl", "size": 43}, {"text":"oi", "size": 43}, {"text":"gone", "size": 43}, {"text":"said", "size": 44}, {"text":"yeah", "size": 45}, {"text":"look", "size": 46}, {"text":"say", "size": 47}, {"text":"want", "size": 47}, {"text":"way", "size": 50}, {"text":"bit", "size": 51}, {"text":"wit", "size": 51}, {"text":"ya", "size": 51}, {"text":"money", "size": 51}, {"text":"love", "size": 51}, {"text":"people", "size": 53}, {"text":"make", "size": 55}, {"text":"think", "size": 56}, {"text":"life", "size": 58}, {"text":"time", "size": 60}, {"text":"need", "size": 60}, {"text":"let", "size": 61}, {"text":"man", "size": 65}, {"text":"shit", "size": 67}, {"text":"day", "size": 68}, {"text":"tell", "size": 69}, {"text":"right", "size": 70}, {"text":"ve", "size": 75}, {"text":"cause", "size": 90}, {"text":"da", "size": 101}, {"text":"just", "size": 165}, {"text":"know", "size": 167}

        ],
    song: "<iframe width='100%' height='450' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/85145504&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
},
{
    name: "Tupac",
    x: 1767/3281,
    r: 313652/130000,
    id: "tupac",
    gender: "male",
    race: "black",
    total_words: 313652,
    unique_words: 1767,
    average_grade_level: 0.103,
    word_length: 3.7,
    syllables_per_word: 1.38,
    one_syllable_words: 0.692,
    sentiment: -0.25,
    testVar: 0.21,

    frequency: [
        {"text":"deep", "size": 118}, {"text":"seen", "size": 119}, {"text":"cold", "size": 119}, {"text":"scared", "size": 120}, {"text":"blast", "size": 120}, {"text":"best", "size": 120}, {"text":"outlawz", "size": 120}, {"text":"soul", "size": 120}, {"text":"friends", "size": 121}, {"text":"pull", "size": 121}, {"text":"quick", "size": 122}, {"text":"didn", "size": 122}, {"text":"thought", "size": 122}, {"text":"cash", "size": 123}, {"text":"crack", "size": 123}, {"text":"check", "size": 126}, {"text":"free", "size": 126}, {"text":"hood", "size": 127}, {"text":"soldier", "size": 128}, {"text":"help", "size": 128}, {"text":"mad", "size": 128}, {"text":"beat", "size": 129}, {"text":"start", "size": 130}, {"text":"days", "size": 130}, {"text":"lost", "size": 130}, {"text":"couldn", "size": 131}, {"text":"fight", "size": 131}, {"text":"hey", "size": 131}, {"text":"roll", "size": 132}, {"text":"damn", "size": 132}, {"text":"hate", "size": 132}, {"text":"born", "size": 132}, {"text":"face", "size": 132}, {"text":"things", "size": 133}, {"text":"getting", "size": 133}, {"text":"homie", "size": 133}, {"text":"old", "size": 134}, {"text":"kids", "size": 134}, {"text":"police", "size": 134}, {"text":"murder", "size": 135}, {"text":"new", "size": 135}, {"text":"gon", "size": 136}, {"text":"believe", "size": 136}, {"text":"hope", "size": 136}, {"text":"place", "size": 136}, {"text":"family", "size": 137}, {"text":"living", "size": 138}, {"text":"trying", "size": 139}, {"text":"sleep", "size": 139}, {"text":"times", "size": 139}, {"text":"rock", "size": 141}, {"text":"nothin", "size": 142}, {"text":"runnin", "size": 142}, {"text":"weed", "size": 142}, {"text":"inside", "size": 143}, {"text":"jail", "size": 143}, {"text":"understand", "size": 145}, {"text":"heard", "size": 147}, {"text":"war", "size": 148}, {"text":"show", "size": 148}, {"text":"strong", "size": 148}, {"text":"catch", "size": 149}, {"text":"punk", "size": 150}, {"text":"ha", "size": 150}, {"text":"tha", "size": 151}, {"text":"left", "size": 151}, {"text":"boy", "size": 152}, {"text":"uh", "size": 152}, {"text":"bout", "size": 153}, {"text":"comin", "size": 154}, {"text":"bring", "size": 154}, {"text":"outlaw", "size": 155}, {"text":"wrong", "size": 155}, {"text":"girl", "size": 157}, {"text":"thugs", "size": 158}, {"text":"really", "size": 158}, {"text":"said", "size": 159}, {"text":"till", "size": 159}, {"text":"drop", "size": 161}, {"text":"wonder", "size": 163}, {"text":"picture", "size": 163}, {"text":"house", "size": 164}, {"text":"told", "size": 165}, {"text":"people", "size": 165}, {"text":"gun", "size": 165}, {"text":"crazy", "size": 168}, {"text":"straight", "size": 169}, {"text":"gone", "size": 170}, {"text":"everybody", "size": 170}, {"text":"away", "size": 171}, {"text":"won", "size": 173}, {"text":"hoes", "size": 175}, {"text":"came", "size": 175}, {"text":"ready", "size": 176}, {"text":"remember", "size": 176}, {"text":"throw", "size": 177}, {"text":"play", "size": 177}, {"text":"true", "size": 177}, {"text":"body", "size": 180}, {"text":"hold", "size": 181}, {"text":"change", "size": 181}, {"text":"kill", "size": 182}, {"text":"cry", "size": 183}, {"text":"home", "size": 184}, {"text":"shot", "size": 187}, {"text":"hands", "size": 187}, {"text":"ve", "size": 187}, {"text":"leave", "size": 189}, {"text":"good", "size": 189}, {"text":"long", "size": 190}, {"text":"oh", "size": 191}, {"text":"dead", "size": 193}, {"text":"goin", "size": 194}, {"text":"cops", "size": 195}, {"text":"lord", "size": 195}, {"text":"peace", "size": 198}, {"text":"night", "size": 199}, {"text":"mama", "size": 199}, {"text":"run", "size": 199}, {"text":"turn", "size": 200}, {"text":"enemies", "size": 201}, {"text":"bad", "size": 204}, {"text":"wit", "size": 210}, {"text":"bust", "size": 211}, {"text":"big", "size": 223}, {"text":"pain", "size": 228}, {"text":"think", "size": 235}, {"text":"ghetto", "size": 236}, {"text":"eyes", "size": 239}, {"text":"head", "size": 242}, {"text":"streets", "size": 242}, {"text":"block", "size": 245}, {"text":"stay", "size": 249}, {"text":"high", "size": 254}, {"text":"til", "size": 255}, {"text":"hear", "size": 257}, {"text":"livin", "size": 258}, {"text":"look", "size": 258}, {"text":"tryin", "size": 259}, {"text":"try", "size": 259}, {"text":"heart", "size": 260}, {"text":"homies", "size": 260}, {"text":"little", "size": 265}, {"text":"death", "size": 265}, {"text":"motherfuckin", "size": 266}, {"text":"hell", "size": 270}, {"text":"gonna", "size": 270}, {"text":"watch", "size": 283}, {"text":"need", "size": 284}, {"text":"better", "size": 293}, {"text":"fuckin", "size": 300}, {"text":"mind", "size": 302}, {"text":"god", "size": 304}, {"text":"motherfucker", "size": 316}, {"text":"ride", "size": 319}, {"text":"black", "size": 329}, {"text":"hit", "size": 333}, {"text":"hard", "size": 349}, {"text":"live", "size": 350}, {"text":"stop", "size": 357}, {"text":"motherfuckers", "size": 359}, {"text":"day", "size": 359}, {"text":"right", "size": 368}, {"text":"gotta", "size": 368}, {"text":"young", "size": 369}, {"text":"say", "size": 374}, {"text":"feel", "size": 375}, {"text":"real", "size": 382}, {"text":"money", "size": 385}, {"text":"want", "size": 401}, {"text":"bitches", "size": 405}, {"text":"gettin", "size": 418}, {"text":"yo", "size": 423}, {"text":"world", "size": 426}, {"text":"way", "size": 441}, {"text":"yeah", "size": 450}, {"text":"game", "size": 477}, {"text":"baby", "size": 483}, {"text":"bitch", "size": 504}, {"text":"pac", "size": 510}, {"text":"come", "size": 512}, {"text":"ass", "size": 515}, {"text":"tell", "size": 518}, {"text":"man", "size": 549}, {"text":"wanna", "size": 585}, {"text":"make", "size": 674}, {"text":"die", "size": 679}, {"text":"love", "size": 721}, {"text":"thug", "size": 732}, {"text":"let", "size": 794}, {"text":"time", "size": 850}, {"text":"just", "size": 908}, {"text":"ya", "size": 922}, {"text":"life", "size": 936}, {"text":"fuck", "size": 982}, {"text":"shit", "size": 1019}, {"text":"know", "size": 1197}, {"text":"cause", "size": 1320}, {"text":"nigga", "size": 2068}, {"text":"niggas", "size": 2096}

        ],
    song: "<iframe width='100%' height='450' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/101715275&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"
}

]











//  4) Make chart
var makeChart = function(dataChoice){



console.log(window.userChoice)
// if the chart exists, show it:
if ($("#" + dataChoice).length){
        $(".svgCharts").hide();
        $("#" + dataChoice).show();

// if it doesn't exist, make it!

} else { console.log("creating an svg for " + dataChoice + "chart")
                
    if(window.userChoice == null){
        window.userChoice = 'all';
    }

    console.log(dataChoice);

    $(".svgCharts").hide();

    var body = d3.select("#allCharts");

    var div = body.append("div")
                .attr("class", "svgCharts")
                .attr("id", dataChoice);


    //Set up SVG and axis//   
    var svg = div.append("svg")
                .attr("height", 550)
                .attr("width", 1000);


    var margin = 50; //space in pixels from edges of SVG
    var padding = 4; //space in pixels between circles
    var maxRadius = 25;
    var biggestFirst = true; //should largest circles be added first?

    var width = 1000;
        
        // This part is not necessary if you define the size of the SVG
        // in absolute terms (like I have above)
        // window.getComputedStyle(d3.select("svg")[0][0])["width"];
        // width = digits.exec(width)[0];
    var height = 500;

        // Same here - I've already defined SVG 
        // window.getComputedStyle(svg[0][0])["height"];
        // height = Math.min(digits.exec(height)[0], width);
        
    var baselineHeight = (margin + height)/2;

    // The domain of the x-scale defines its scale (in this case it goes from 0 to 1)
    
    if(dataChoice == "one_syllable_words"){
    var xScale = d3.scale.linear()
            .domain([0.55,0.76])
            .range([margin,width-margin]);
    } else if (dataChoice == "x"){
    var xScale = d3.scale.linear()
        .domain([0.4,1])
        .range([margin,width-margin]);
    } else if (dataChoice == "average_grade_level"){
    var xScale = d3.scale.linear()
        .domain([0.05,0.15])
        .range([margin,width-margin]);
    }
           
    var rScale = d3.scale.sqrt()  
            //make radius proportional to square root of data r
            .domain([0,1])
            .range([1,maxRadius]);
        
    // var formatPercent = d3.format(".0%");

    // the x-axis is the line on top, with % tick marks
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("top")
        .ticks(0)
        // .tickFormat(formatPercent);
        
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0,280)")
        .call(xAxis);
        
        
    var bubbleLine = svg.append("g")
            .attr("class", "bubbles")
            .attr("transform", 
                  "translate(0, 280)");
        
        // bubbleLine.append("line")
        //     .attr("x1", xScale.range()[0])
        //     .attr("x2", xScale.range()[1]);
    //________________//
        
    //Create Quadtree to manage data conflicts & define functions//
        
    var quadtree = d3.geom.quadtree()
            .x(function(d) { 

            if(dataChoice == "one_syllable_words"){
                return xScale(d.one_syllable_words);  
            } else if(dataChoice == "x"){
                  return xScale(d.x);
            } else if(dataChoice == "average_grade_level"){
                  return xScale(d.average_grade_level);
            }
                   }) 
            

            .y(0) //constant, they are all on the same line
            .extent([[xScale(-1),0],[xScale(2),0]]);
        //extent sets the domain for the tree
        //using the format [[minX,minY],[maxX, maxY]]
        //optional if you're adding all the data at once

    var quadroot = quadtree([]);
              //create an empty adjacency tree; 
              //the function returns the root node.
        
    // Find the all nodes in the tree that overlap a given circle.
    // quadroot is the root node of the tree, scaledX and scaledR
    //are the position and dimensions of the circle on screen
    //maxR is the (scaled) maximum radius of dots that have
    //already been positioned.
    //This will be most efficient if you add the circles
    //starting with the smallest.  
    function findNeighbours(root, scaledX, scaledR, maxR) {

        var neighbours = [];
        //console.log("Neighbours of " + scaledX + ", radius " + scaledR);
        
      root.visit(function(node, x1, y1, x2, y2) {
          //console.log("visiting (" + x1 + "," +x2+")");
        var p = node.point; 
        if (p) {  //this node stores a data point value
            
            if(dataChoice == "one_syllable_words"){
            var overlap, x2=xScale(p.one_syllable_words), r2=rScale(p.r);   
            } else if(dataChoice == "x"){
            var overlap, x2=xScale(p.x), r2=rScale(p.r);  
            } else if(dataChoice == "average_grade_level"){
            var overlap, x2=xScale(p.average_grade_level), r2=rScale(p.r);  
            }    
            if (x2 < scaledX) {
                //the point is to the left of x
                overlap = (x2+r2 + padding >= scaledX-scaledR);
                /*console.log("left:" + x2 + ", radius " + r2 
                            + (overlap?" overlap": " clear"));//*/
            }      
            else {
                //the point is to the right
                overlap = (scaledX + scaledR + padding >= x2-r2);
                /*console.log("right:" + x2 + ", radius " + r2 
                            + (overlap?" overlap": " clear"));//*/
            }
            if (overlap) neighbours.push(p);
        }
       
        return (x1-maxR > scaledX + scaledR + padding) 
                && (x2+maxR < scaledX - scaledR - padding) ;
          //Returns true if none of the points in this 
          //section of the tree can overlap the point being
          //compared; a true return value tells the `visit()` method
          //not to bother searching the child sections of this tree
      });
        
        return neighbours;
    }

    function calculateOffset(maxR){
        return function(d) {
            if(dataChoice == "one_syllable_words"){
            neighbours = findNeighbours(quadroot, 
                                       xScale(d.one_syllable_words),
                                       rScale(d.r),
                                       maxR);
            } else if(dataChoice == "x"){
            neighbours = findNeighbours(quadroot, 
                                   xScale(d.x),
                                   rScale(d.r),
                                   maxR);
            } else if(dataChoice == "average_grade_level"){
            neighbours = findNeighbours(quadroot, 
                                   xScale(d.average_grade_level),
                                   rScale(d.r),
                                   maxR);
            }

            var n=neighbours.length;
            //console.log(j + " neighbours");
            var upperEnd = 0, lowerEnd = 0;      
            
            if (n){
                //for every circle in the neighbour array
                // calculate how much farther above
                //or below this one has to be to not overlap;
                //keep track of the max values
                var j=n, occupied=new Array(n);
                while (j--) { 
                    var p = neighbours[j];
                    var hypoteneuse = rScale(d.r)+rScale(p.r)+padding; 
                    //length of line between center points, if only 
                    // "padding" space in between circles
                    if(dataChoice == "one_syllable_words"){
                    var base = xScale(d.one_syllable_words) - xScale(p.one_syllable_words); 
                    } else if (dataChoice == "x"){
                    var base = xScale(d.x) - xScale(p.x); 
                    } else if (dataChoice == "average_grade_level"){
                    var base = xScale(d.average_grade_level) - xScale(p.average_grade_level); 
                    }
                    // horizontal offset between centres
                    
                    var vertical = Math.sqrt(Math.pow(hypoteneuse,2) -
                        Math.pow(base, 2));
                    //Pythagorean theorem
                    
                    occupied[j]=[p.offset+vertical, 
                                 p.offset-vertical];
                    //max and min of the zone occupied
                    //by this circle at x=xScale(d.x)
                }
                occupied = occupied.sort(
                    function(a,b){
                        return a[0] - b[0];
                    });
                //sort by the max value of the occupied block
                //console.log(occupied);
                lowerEnd = upperEnd = 1/0;//infinity
                    
                j=n;
                while (j--){
                    //working from the end of the "occupied" array,
                    //i.e. the circle with highest positive blocking
                    //value:
                    
                    if (lowerEnd > occupied[j][0]) {  
                        //then there is space beyond this neighbour  
                        //inside of all previous compared neighbours
                        upperEnd = Math.min(lowerEnd,
                                            occupied[j][0]);
                        lowerEnd = occupied[j][1];
                    }
                    else {
                        lowerEnd = Math.min(lowerEnd,
                                            occupied[j][1]);
                    }
                //console.log("at " + formatPercent(d.x) + ": "
                  //          + upperEnd + "," + lowerEnd);
                }
            }
                
                //assign this circle the offset that is smaller
                //in magnitude:
            return d.offset = 
                    (Math.abs(upperEnd)<Math.abs(lowerEnd))?
                            upperEnd : lowerEnd;
        };
    }
        
    // CREATE THE CIRCLES!
    var maxR = 0;
    var $circles = bubbleLine.selectAll("circle")
        .data(data.sort(
            biggestFirst?
                function(a,b){return b.r - a.r;} :
                function(a,b){return a.r - b.r;}
            ))          
        .enter()
            .append("circle")
            .attr("r", 
                function(d){
                var r=rScale(d.r);
                maxR = Math.max(r,maxR);
                return r;})
            .on("mouseover", function(d) {
              d3.select(this).style("stroke", "red")
              d3.select(this).style("stroke-width", 3)
              d3.select(this).style("fill", function(d){
                name = "url(#" + d.id + ")"
                return name
              })
            }) 
            .on("mouseout", function(d) {
              console.log(d.id)
              d3.select(this).style("stroke-width", 0)
              if(d.id != window.userChoice){
                d3.select(this).style("fill", "gray")
            }

            })
            
            .style("fill", "gray")




            .each(function(d, i) {

                //for each circle, calculate it's position
                //then add it to the quadtree
                //so the following circles will avoid it.
                
                //console.log("Bubble " + i);
                if(dataChoice == "one_syllable_words"){
                var scaledX = xScale(d.one_syllable_words); 

                } else if(dataChoice == "x"){
                var scaledX = xScale(d.x);
                } else if(dataChoice == "average_grade_level"){
                var scaledX = xScale(d.average_grade_level);
                }         
                d3.select(this)

                    .attr("class", d.id + " " + d.region + " "+ d.gender + " " + d.race)
                    .attr("cx", 500)
                    .attr("cy",  0)

                .on("click", function(d) {
                    d3.selectAll("line").remove();
                    if(window.userChoice != d.id){
                    bubbleLine.append("line").datum(d)
                        .attr("x1", scaledX)
                        .attr("x2", scaledX)
                        .transition().duration(2000)
                        .attr("y1", (d.offset))
                        .attr("y2", 0)
                    }



                    window.userChoice = d.id;
                    highlightRappers(d.id);
                if(!$("#" + d.id + "info").length) {

                    console.log("creating a div for " + d.id)
                    d3.select("body").append("div").attr("id", d.id + "info").attr("class", "rappers");
                    populateRapperDiv(d.id);
                }  


                    

                 moreInfo(d.id)




            })


        .transition().delay(0).duration(2000)
                .attr("cy", calculateOffset(maxR))
                .attr("cx", scaledX)

                  



        quadroot.add(d);
            
        //add a drop line from the centre of this
        //circle to the axis
        //  bubbleLine.append("line").datum(d)

        // .attr("x1", scaledX)
        // .attr("x2", scaledX)
        // .transition().delay(2000).duration(2000)
        // .attr("y1", (d.offset - d.r))

        // .attr("y2", 0)
            
           
    });
        






        $('circle').tipsy({ 
            gravity: 's', 
            html: true, 
            title: function() {
                d = this.__data__
              // var d = this.__data__, c = colors(d.i);
              return "I'm " + d.name +"! I know " + d.x*100 + " words!"

            }
          });


    }



}

var xChart = function(){

    circles = d3.selectAll("circle")
        .transition().delay(0).duration(1000)
                .attr("cy", 0)
                .attr("cx", 500);


   

    setTimeout(function(){
        circles = d3.selectAll(".svgCharts")
        .remove()
        makeChart('x')

        highlightRappers(window.userChoice);

    }, 1000);

}

var one_syllable_wordsChart = function(){

    circles = d3.selectAll("circle")
        .transition().delay(0).duration(2500)
                .attr("cy", 0)
                .attr("cx", 500);


 

    setTimeout(function(){
        circles = d3.selectAll(".svgCharts")
        .remove()
        makeChart('one_syllable_words')

        highlightRappers(window.userChoice);

    }, 2000);

}

var average_grade_levelChart = function(){

    circles = d3.selectAll("circle")
        .transition().delay(0).duration(2500)
                .attr("cy", 0)
                .attr("cx", 500);


 

    setTimeout(function(){
        circles = d3.selectAll(".svgCharts")
        .remove()
        makeChart('average_grade_level')

        highlightRappers(window.userChoice);

    }, 2000);

}
