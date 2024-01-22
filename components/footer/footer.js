document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".write-us-button").addEventListener("mouseover", () => {
        document.querySelector(".popover").style.display = "block";
    });
    document.querySelector(".write-us-button").addEventListener("mouseout", () => {
        document.querySelector(".popover").style.display = "none";
    });
    document.querySelector(".write-us-button").addEventListener("click", () => {
        const emailAddress = "itacademy@tbcbank.com.ge";
        window.location.href = "mailto:" + emailAddress;
    });
});