let sample = ["467..114..",
    "...*......",
    "..35..633.",
    "......#...",
    "617*......",
    ".....+.58.",
    "..592.....",
    "......755.",
    "...$.*....",
    ".664.598..",];

const data = ["........897.......839...........651.399.............236...............................343...986...........308...............................",
    "........*................*404......*............134.....953..508=.....................*....*..........325*..........744......392............",
    "...350..847..403...-..541.....622.................*....................356.......%..95...793....................830...........*.....163.....",
    ".....&.......@...105.............$..745............42...785.............*..443.412............922..............*...........663........*.....",
    ".253....../..........696.............*..................*..............817.$.....................*...........62........................373..",
    "...........244...419....*189....=........*...871.74...797...353.737................227..626.....429.726%...9......*956...803/.......*.......",
    ".793...........=.....-...........119..683.18.*...............@......+.....182..372....$.&...................*..756...............945.610....",
    "....*.........496.....395.....................929.746................76..*.....*..............673-...*.....47........591..271...............",
    ".....964..................241...........*............+.....+....590.......129.6....$.....@...........680....................*...............",
    "..........523*448...........&....136.759.356............789.......*.................367.330..397.............483....354......354...869......",
    "...488................920........*...........................652...802....$.......*............*..............-.....................*.......",
    "..../.........986....*......*....550.995......376...............+......641.....567.315.........887..66...863....552.936..........277........",
    ".................*.800...354.464.......*.533......................20.......704..........918........*.....*...........*....214........&434...",
    "........%.....589...................596..*.......373...-..........*....785.@......941......*....521.......908...897..610....................",
    "........384..........827*101....698......978....*......947.614.571....*..........@.....+...1.......................=......#73...734.........",
    "122%..........*...................*..........993............./.....260.........+.....466...............%........................*...........",
    "...........938.992........246......305...449......335...739................588..681.........920.....164.........................431.........",
    "..558....$........................................@.....*.....................=............-............847.....879..51................624..",
    ".....*.104....*818.......505.785.10...................161....210....................723..........55......*..424..&.....*.........723..*.....",
    "...44......542.....975..................437...............51....*686.....*....../..*.........990*......708.....@....715...&....#.......997..",
    "...............801..@.............-....*.....702....&....*............238.236.706.183..+................................842.545.............",
    "...........202*...................906..204...*...990......212....380%..................208...................66.............................",
    "......./........../....878............................266.......................278...............920...................144.........423.....",
    "....494..*.....976........@.....&.......*287...553-..*.............731...................649..247*........703......@....%....817....*.......",
    ".........856.......592...........708.404............707.......274...*........-............#.....................%.567.........*......431.761",
    ".............663.........974...............%...446.............*............751....793..........811....225.&...48.....860..887..............",
    "................&...........*.......673..536......-.........447.....@...............@...$..................816..........*...................",
    "....822................@....251....$............................413..306.164.............540.....313..476..........@...586./65....840.......",
    ".....*......@.950.....266............$.........1...+...............*..........373..................*.............885.................*......",
    "......157.529....*.........341.....480.............60......765....122...633....+............$182....963.....................587..976.824....",
    "................172............685.....480....#........831*................*......747......................262..................-...........",
    "....*......+438.....@......332./.......=...739..815...............356.....119.273.&.....317*674.......=...*....561..........192..........89.",
    "....867..-........179..............319........../....74@..952*374...*.........*....................125....578...*...........*......652......",
    "..........549.............873.........*...=........*...............695.*.....126.........821.....................697.$......806.52....*54...",
    "....792...........-...646*....770.....163.637....941........884.........744..............................#............800...................",
    ".......*.......181............@.............../........92..#...................518...654.......421*995.310....450...............771.........",
    "...+................./48...........968.........269................904.......=...../.....................................266.....*...........",
    ".211....636.................630.17*.....%581........./843.....%..*.......878...............829.....119.33........211.........247............",
    ".......*......................-...................%..........559..873.............*138.439*....687*..........130....*681....................",
    "....522.................792........896.........471...480*321...................125..............................*...................291.....",
    "........616.......818.....$..858.............................659*826.....109.....................................10.564=.331...156...+......",
    "........*.......@...*..29....*...@......546.............907.............*.....965.......217.808.....802..212...............*................",
    "....607.976..641..852.@...330...158....../.......630........247.......503........$.335+....*.........*..*....618...423&.335...803...........",
    "......=..............................502........#........-..*.....923......664....................421...395.-..................#............",
    "........*.................625....646..@...99............901.59......*.....*..........517.$747.*....................315..............79...922",
    ".....289.789..............%......*.........*......................762....388..189.....*........277.........*222...*.................$.......",
    ".................................738....406.....462...........................*.....915..............505/.......61.....+.......202*......646",
    "..749..............163............................*.....963..........907.......979....................................223..716.....265......",
    ".......&....741............362.......117.......837..96../.................#..............786.256.....942..=970...983........*...............",
    "......133......*486.725.......*....../...............%................930.310...................*733.-.............$.....198.........189....",
    "....................*........256........68.......267...873........418*.....................573.................................219..*.......",
    "......+.....439..525..187........495..............*...=.......923..........327..988..300........447*59..702../..840......40.....*...........",
    "......731....*........*..........*..............547.......453.....6.$.........*.......*................-....447....@.......*.737............",
    ".907#.......375........195.....707..17.................9..........%..119...147..594.22.......81.........................485......446........",
    ".....................................*....#............*.....62...................*...........*....569...935.868....-...............*528....",
    "...#..........209........229.......787.470..............403........892.........816.....923..811...$.........*......104.907.849....*.........",
    "..154.346.....*...361.........................10/...237................-................*.............600..............*.......998.606......",
    ".........%...216..*.......*.........*368.869.........#................6..98...........53.............*.....850@...102...751.................",
    "....550............727...383.....818.....*...913.............879...........*.....420.....150.........708....................................",
    "705*.......@688.......................289.....*.........................431........*...+....*50.....................698...668*144...........",
    "..................501..70.520....$32......562..458....170......279$............504......883............/...44........*......................",
    "..450..107@........*..................586*...........*.........................*....510............788.274............589...-26......&......",
    "...................342.........&.551+.................302...............286.....931....&....-649..$.............575................185...199",
    "............602..............470.........243*......@............818.690*.......................................*....863..793*...............",
    "......934.....*......200.936.....46..........137.72.........377*......................443*372........498....320..#...........553......598...",
    "........-...451./952..*...*....*.......................804..............305......700............675...&.........611.........................",
    "......................393.......708....957........*697......808.....138*.........%......186....*....%...162*...........624........244.%.....",
    ".....220*.........872......*...........*.........7.........................................=..6....391......562...880.....*......#....120...",
    "...+.....608.........*...74.568........193.........379.........$682......933.927&.....&............................./..984..................",
    "93..553........*768.739...........421.........880.....*....737.............*.........69.....................................................",
    ".........334...............................40*........910.................................+465..682.............141*.......248..80..........",
    ".........=..................323...172.............506..............503........568....785+.......%.......940*734.......#573....*...*.....130.",
    "...163@........%17..42..108*.......*...$......700..*..81...../...............+....%.............................#285.........499.523....*...",
    ".............-........*..........305.706.....*....942.....843........*.............378.861.......573.859.173............522............544..",
    "..........974.......517.756..762.............480.....................289................*...........*......*.228%..........*......628.......",
    "....567........&274......+..../..........................................926.............391............214.............270...230..-........",
    "...........=...............52...../......155*150.......180&..*......482..&...884................-125...........................@............",
    "..........332..................318............................123......%......*...............=........................310..................",
    "....................856.154........@............161....192..................=..387.............384..*827................*..&400......588....",
    ".......283.............*....@.......12.....309...*...$...........643.......885..........862................210.......449....................",
    ".......*......937.........98.....&........*....560....884.......$.................866#.../.............622..*..901.............462..........",
    ".....279............273......896..17.661..880...............138...632......66...%.............93......*....349...*........./......=.........",
    "..............430....*....+.....*.....*............350...............*..........226.......621*......312........=..266....574..111...........",
    "..339........../.....770.451....122........990.....................811...780........*448.................325.249...............+...$...441..",
    "......................................$......%...........793..............@..787.766....................................64..+......252.*....",
    ".........556........../.....256/...267...336.....897..........524*417.........................950...930$.452........164......713.......592..",
    "....759....*...........672.................-.868....*....613......................401.....742..*..............560........=.........939......",
    ".....$...780.......195......578...............*...%...+....*.....=.....&.............*......#...645...636.797..........652...........*......",
    "......................*......................77...97.988.821...882...977.......127.609.914...............*..................................",
    "..........+...195&.....930.....872.......................................79..............&.....14...................-.......150..274........",
    "..........473................9*.............951&................./...827*.............46......-...13....751.........640.......*.....*504....",
    "898................-.............56*....378..............291..310..........58............937.....$.......*.../.............840..714.........",
    "............-321.128.157............549..-....130....478*.........*.....................................123...164..............*....631.....",
    "..516..989@..........*.........*670............................204..577.......&817....@514........790...............816.........148.*.......",
    ".....*................233...........*838.....*951.....-954..........$.......&.................110.........99...........*..@187.......671.467",
    "224...205.....552................823......343................490*...........377..................*.......$...........779.......408..........",
    "............./..../.....................................166*..........120...........452.........148...=.......................*.............",
    ".562..............768.........#.267.29...806*......476......214.........*....*......*...............867.211....248.$870....@...829...*......",
    "...*..826@...................1.....*.........251....+.....#...........211.893.403....702.......44.......*........+..........75......977.....",
    "..368.........861$......867....=.......................834.....................................=.........507................................",
    ".......721*............*.......912.#497....................87-.....231...894.......968..........................659$.......@..........564...",
    "...........690.......432....@..................332................*.........*756..*................302..214*.........803..855...............",
    "..................26.......943...........633...*.....299.150....639.................796.....440.............428......+...........538.647....",
    "........31........*............................260.....-................=..261.............*............................644.303..%.....-....",
    "227..........#.161....*....&.....305...............345........328....639...*........$.......802....612.185................%../..............",
    ".......683.953.....224....58.....*.................*....799...............944.964....245.............*.%................@......28.19.242.97.",
    "....93*........../.............908.........$249..480.......*......978..............................58........=209......373.802*.........*...",
    "467...........201..........932.....997......................548................/.....-904.....796.....3+............................915.....",
    "...................#......@.......*......748*965.................922......451..169..............$.945....372#..979........%..436...*........",
    "........&.....880&..789........14.805..............571....222/.....*.70......*........./958..........%.........&.../....61.....*...73.......",
    ".......280.................................=.861......-.........144...........950................%.......907......910.......396.............",
    ".....+.........592*149.820*511...........298....&.......*264..........-..527..............-.....679.......*...............@......50*270.....",
    "...901......=....................@483.............$..936......625%...619....%..........748...............785...860......26..181.........747.",
    ".........85..640...#........=.=.......49.......216.............................268*.............................#...........#.....53....*...",
    "...........+.......744...933...766....*.................%...............*714.......909................................999...........*...311.",
    ".............783....................947.................352...765..............897.....+430..869.................121.%............236.......",
    "...45....*......*..752......617..................332...........*...236...........*..........*....@.528..........&......530..................",
    "..../.134.713.871..*.............*...........#.....%.930...........*....323....377........678.544..*........542.........$.......470.629*786.",
    "..................259...&.....959.225......177.......*.....912*..........$.........................306..996.*....*.........*681...*.........",
    "..........250*768......598.........................850.........598..............3*.........904*648........=.372...197...410......152...=....",
    "............................................507@.......960..............362.164...131...................................................115.",
    ".....746.......117..678=........952...303*.......+......................./..*...........$636../...597......37................351...=........",
    ".......*.281...@...................*......337.258..814...687.....#922.=....772..611.153.......573....*.......*..............*.......518.....",
    "....144.....*.......396...........240................+......*.........45.......+.......*...........479.&293..126.....784-...783.............",
    "...........843...@....*..918*.............................986.....542...................117.....................................578.707.....",
    "..984.............251........258....597$.650.........................*..................................928.409.684...547.......*....%......",
    "....&..489....931...........................$....356........................489..............302...............*............./...259.../996.",
    "......./........*.................................*......385........63*911...*.........%........*578...633.175.........@804..421............",
    "..98...........188..........226....+...............909....*...................535.....798................$....*.796.........................",
    "....*.....%...................+....531...563...........426......617*202.........................929-.......439....%..332.....+.23&.347......",
    "...364..149..............425............*.....662.481.......................788..$844..................506..........@.....693......&........",
    "..........................*....408...772....+.......-.......232*......*......*.............#.+294.....*.....706................435..........",
    "......566*972........631=.425.*...........14............984.....667..7.236....195..9.....222........757......*.....865..604&..*....344.&....",
    ".................439..........710..............477*714..............................*544........368............395*...........435...*..204..",
    "..........229......+..596.179........../................165.542*47........147..............653..*...................466...........119.......",
    ".....690...@............@.......467..626........&......*.................*....=42.....724....+.816....262*.....237.@....549.383.............",
    "......*.........750..............*..............202....967.914......279..................*........./......147.@...............*........480..",
    "...444.......84...#....+..........527......*351..............*......*................225..888.......806.............7......#...518.....*....",
    ".............*........628...............749......*976.200.....852..354...23....=........*...............................138............833..",
    "..........964.................................211...............................578.....986.............879......59........................."]

let dataTable = data.map(row => [...row]);

//const symbols = ['!', '"', '£', '$', '%', '^', '&', '*', '(', ')', '#', '/'];
const symbols = [...new Set(dataTable.flat())].filter(cell => {
    if (cell == '.') {
        return false;
    }
    //is a number
    if (!isNaN(cell)) {
        return false;
    }
    return true;
});


let engineParts = [];



for (let rowIndex = 0; rowIndex < dataTable.length; rowIndex++) {
    const row = dataTable[rowIndex];
    const currentRow = rowIndex;
    for (let cellIndex = 0; cellIndex < row.length; cellIndex++) {
        const cell = row[cellIndex];
        const currentIndex = cellIndex;

        if (!isNaN(cell)) {

            //check position

            enginePart = nextCell(rowIndex, cellIndex);

            cellIndex = cellIndex + enginePart.partNumber.length - 1;

            enginePart.partNumber = parseInt(enginePart.partNumber);
            engineParts.push(enginePart);

        }
        //console.log('cell');
    }
    //console.log('row');
}

console.log(engineParts);

let vaildEngineParts = engineParts.filter(part => part.vaild);

let starOne = vaildEngineParts.reduce((sum, part) => sum + part.partNumber, 0);

console.log(`StarOne ${starOne}`);


function isAdjacent(rowIndex, cellIndex) {

    //check top
    if (rowIndex > 0) {
        //check top
        if (symbols.includes(dataTable[rowIndex - 1][cellIndex])) { return true; }
        //check top left
        if (cellIndex > 0) {
            if (symbols.includes(dataTable[rowIndex - 1][cellIndex - 1])) { return true; }
        }

        //check top right 
        if (cellIndex < dataTable[rowIndex - 1].length - 1) {
            if (symbols.includes(dataTable[rowIndex - 1][cellIndex + 1])) { return true; }
        }

    }
    //check bottom
    if (rowIndex < dataTable.length - 1) {
        //check bottom
        if (symbols.includes(dataTable[rowIndex + 1][cellIndex])) { return true; }
        //check bottom left
        if (cellIndex > 0) {
            if (symbols.includes(dataTable[rowIndex + 1][cellIndex - 1])) { return true; }
        }

        //check bottom right 
        if (cellIndex < dataTable[rowIndex + 1].length - 1) {
            if (symbols.includes(dataTable[rowIndex + 1][cellIndex + 1])) { return true; }
        }

    }

    //check left
    if (cellIndex > 0) {
        if (symbols.includes(dataTable[rowIndex][cellIndex - 1])) { return true; }
    }

    //check right 
    if (cellIndex < dataTable[rowIndex].length - 1) {
        if (symbols.includes(dataTable[rowIndex][cellIndex + 1])) { return true; }
    }

    return false;
}


function nextCell(row, cell) {
    let enginePart = {
        partNumber: '',
        vaild: false
    }


    //is a number
    if (!isNaN(dataTable[row][cell])) {
        if (cell < dataTable[row].length) {
            enginePart = nextCell(row, cell + 1);
        }

        enginePart.partNumber = `${dataTable[row][cell]}${enginePart.partNumber}`;
        if (!enginePart.vaild) {
            enginePart.vaild = isAdjacent(row, cell);
        }
    }
    return enginePart;
}