    function validateBloodGroup() {
            let bg = document.getElementById("bloodGroup").value;
            let error = "";

            if (bg === "") {
                error = "Please select a blood group.";
            }

            document.getElementById("bgError").innerText = error;

            return error === "";
        }