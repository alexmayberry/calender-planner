// CURRENT TIME
    // Create variable for time element
    let currentTimeEl = $('#currentDay');
    let currentTime = '';
    let currentHour = '';

    // Get current time every second and store it in CurrentTime
    getCurrentTime = () => {
        currentTime = moment();
        currentHour = Number(moment().format('H'));
        currentTimeEl.text(currentTime);
    }

    setInterval(getCurrentTime, 1000);

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
    renderHourBlocks = () => {
        let hourBGColor = '';
        for (let i = 0; i < plannerObj.length; i++) {
            // let hourBGColor = '';
            // if 'time' is before 'blockhour' render blue
            if (currentHour < plannerObj[i].blockHour) {

                console.log(plannerObj[i].blockHour + ' is future');

                hourBGColor = "bg-info";
            }   // if 'time' is after 'blockhour' render grey 
            else if (currentHour > plannerObj[i].blockHour) {

                console.log(plannerObj[i].blockHour + ' is past');

                hourBGColor = "bg-secondary";
            }   // if 'time' is sameas 'blockhour' render green 
            else if (currentHour == plannerObj[i].blockHour) {
                console.log(plannerObj[i].blockHour + ' is present');

                hourBGColor = "bg-success";
            }
            plannerEl.append(
                `
                <div class=" input-group row" data-hour="${i + 9}">
                    <div class="col input-group-text text-center" type="text">${plannerObj[i].displayHour}</div>
                    <textarea class="col-8 border ${hourBGColor}" placeholder="Enter your appointment here" aria-label="Placceholder Event">${plannerObj[i].appointment}</textarea>
                    <button class="col btn btn-success" type="button" id="saveBtn"><i class="fa-solid fa-floppy-disk"></i></button>
                  </div>
                `
            )
        }
    }


excJS = () => {
    console.log('The document has loaded!')

    // Display Current Time
    getCurrentTime();

    // Render blocks
    renderHourBlocks();

    // Save added appointment to local storage
    $('#planner').on('click', 'button', function(event) {
        console.log("data-hour is " +  $(this).parent().attr('data-hour').val());
    
            // FIXME fetch the data-hour attribute value from the clicked hour and store it in a variable. 
            let editedHour = $(this).closest().attr('data-hour');

            let appointmentData = editedHour.sibling('textarea').value;
            
            // Use the hour to create a key         
            let hourKey = 'hour-' + editedHour;

            // use the key and value to save text into local storage
            localStorage.setItem(hourKey, appointmentData);
            // also need to push the new appointmentData to the plannerObj and replace the old 
    
    });



    //test 


    



}

// Runs JS Once Document is loaded
$(document).ready(excJS);