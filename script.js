// CURRENT TIME
    // Create variable for time element
    let currentTimeEl = $('#currentDay');
    let currentTime = '';
    let currentHour = '';


    // test
    console.log(moment().hour(11).minute(0).second(0));

    // Get current time every second and store it in CurrentTime
    setInterval(getCurrentTime, 1000);

    function getCurrentTime() {
        currentTime = moment();
    //    currentHour = moment().format('H');
        currentHour = 11;
    currentTimeEl.text(currentTime);
    }
//
    let plannerEl = $('#planner'); 
    // Store 'blockhour' and text content in blockhour object
    let plannerObj = [
        {   
            blockHour: moment().hour(9).minute(0).second(0).format('H'),
            displayHour: moment().hour(9).minute(0).second(0).format('h A'),
            appointment: ''
        },
        {
            blockHour: moment().hour(10).minute(0).second(0).format('H'),
            displayHour: moment().hour(10).minute(0).second(0).format('h A'),
            appointment: ''
        },
        {
            blockHour: moment().hour(11).minute(0).second(0).format('H'),
            displayHour: moment().hour(11).minute(0).second(0).format('h A'),
            appointment: ''
        },
        {
            blockHour: moment().hour(12).minute(0).second(0).format('H'),
            displayHour: moment().hour(12).minute(0).second(0).format('h A'),
            appointment: ''
        },
        {
            blockHour: moment().hour(13).minute(0).second(0).format('H'),
            displayHour: moment().hour(13).minute(0).second(0).format('h A'),
            appointment: ''
        },
        {
            blockHour: moment().hour(14).minute(0).second(0).format('H'),
            displayHour: moment().hour(14).minute(0).second(0).format('h A'),
            appointment: ''
        },
        {
            blockHour: moment().hour(15).minute(0).second(0).format('H'),
            displayHour: moment().hour(15).minute(0).second(0).format('h A'),
            appointment: ''
        },
        {
            blockHour: moment().hour(16).minute(0).second(0).format('H'),
            displayHour: moment().hour(16).minute(0).second(0).format('h A'),
            appointment: ''
        },
        {
            blockHour: moment().hour(17).minute(0).second(0).format('H'),
            displayHour: moment().hour(17).minute(0).second(0).format('h A'),
            appointment: ''
        }
    ]

    // Create elements for each blockhour
    let renderHourBlocks = () => {
        for (var i = 0; i < plannerObj.length; i++) {
            // TODO THE ISSUE IS THE CONDITIONAL CHECK OF TIME
            let hourBGColor = ''
            // if 'time' is before 'blockhour' render blue
            if (currentHour < plannerObj[i].blockHour) {
                console.log('after');
                hourBGColor = "bg-info";
                console.log('after');
                hourBGColor = "bg-info";
            }   // if 'time' is after 'blockhour' render grey 
            else if (currentHour > plannerObj[i].blockHour) {
                console.log('before');
                hourBGColor = "bg-secondary";
            }   // if 'time' is sameas 'blockhour' render green 
            else if (currentHour == plannerObj[i].blockHour) {
                console.log('same');
                hourBGColor = "bg-success";
            }

            plannerEl.append(
                `
                <div class=" input-group row">
                    <div class="col input-group-text text-center" type="text">${plannerObj[i].displayHour}</div>
                    <textarea class="col-8 border ${hourBGColor}" placeholder="Enter your appointment here" aria-label="Placceholder Event">${plannerObj[i].appointment}</textarea>
                    <button class="col btn btn-success" type="button"><i class="fa-solid fa-floppy-disk"></i></button>
                  </div>
                `
            )
        }
    }



    

    




// Runs JS Once Document is loaded
$(document).ready(excJS);

function excJS() {
    console.log('The document has loaded!')

    // Display Current Time
    getCurrentTime();

    // Render blocks
    renderHourBlocks();

    //test 
    console.log(typeof plannerObj[0].blockHour);
    console.log(typeof currentHour);
    console.log(plannerObj[7].blockHour);
    console.log(currentHour);

    



}