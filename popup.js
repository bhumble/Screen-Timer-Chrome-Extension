// Time's Up!
function timesUp()
{
    startNote = new Notification("Screen Timer", { icon: "icon.png", body: "Time's Up!" });
}

// Start the timer!
function startTimer()
{
    totalMinutes = document.getElementById('timeSlider').value;
    hh = parseInt((totalMinutes / 60), 10);
    mm = totalMinutes % 60;
    minutes = ((mm == 0) ? "" : ((mm == 1) ? "1 minute" : (mm + " minutes")))
    hours = (hh == 0) ? "" : ((hh == 1) ? "1 hour" : (hh + " hours"))
    startMsg = "Timer set to " + hours + (((hh != 0) && (mm != 0)) ? " and " : "") + minutes + "."
    new Notification("Screen Timer", { icon: "icon.png", body: startMsg });
    setTimeout(timesUp, totalMinutes * 60000);
    //window.close(); // close the popup
}

// Update UI controls in response to dragging the time select slider
function updateControls()
{
    totalMinutes = document.getElementById('timeSlider').value;
    if (totalMinutes >= 60)
    {
        document.getElementById('timeSlider').step = 15;
        document.getElementById('timeSlider').min = 0;
    }
    else if (totalMinutes >= 10)
    {
        document.getElementById('timeSlider').step = 5;
        document.getElementById('timeSlider').min = 0;
    }
    else
    {
        document.getElementById('timeSlider').step = 1;
        document.getElementById('timeSlider').min = 1;
    }
    hh = parseInt((totalMinutes / 60), 10);
    mm = totalMinutes % 60;
    document.getElementById('timeText').value = hh + "h " + ((mm < 10) ? '0' : '') + mm + "m";
}

// On load
document.addEventListener('DOMContentLoaded', function ()
{
    document.getElementById('timeSlider').addEventListener('input', updateControls);
    document.getElementById('startButton').addEventListener('click', startTimer);
});