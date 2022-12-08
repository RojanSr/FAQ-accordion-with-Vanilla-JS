//making text bold
const masterDiv = document.getElementsByClassName("master-div");

let isActivated = false;
function showAnswerOne() {
  if (
    getComputedStyle(
      document.getElementById("one").children[1]
    ).getPropertyValue("display") == "block"
  ) {
    document
      .getElementById("one")
      .children[0].children[0].removeAttribute("style");
    document.getElementById("one").children[1].removeAttribute("style");
    document.getElementById("one").children[0].children[1].removeAttribute("style");
  } else {
    if (isActivated === true) {
      document.getElementById("one").children[0].children[0].style.fontWeight =
        "700";
      document.getElementById("one").children[0].children[0].style.color =
        "var(--txt-primary-dark)";
        document.getElementById("one").children[0].children[1].style.transform = "rotate(180deg)";
      document.getElementById("one").children[1].style.display = "block";

      //remove all attribute but activate your own
      for (const index in masterDiv) {
        masterDiv[index].children[0].children[0].removeAttribute("style");
        masterDiv[index].children[1].removeAttribute("style");
        masterDiv[index].children[0].children[1].removeAttribute("style");

        document.getElementById(
          "one"
        ).children[0].children[0].style.fontWeight = "700";
        document.getElementById("one").children[0].children[0].style.color =
          "var(--txt-primary-dark)";
          document.getElementById("one").children[0].children[1].style.transform = "rotate(180deg)";
        document.getElementById("one").children[1].style.display = "block";
      }
      isActivated = true;
    } else {

      document.getElementById("one").children[0].children[1].style.transform = "rotate(180deg)";

      document.getElementById("one").children[0].children[0].style.fontWeight =
        "700";
      document.getElementById("one").children[0].children[0].style.color =
        "var(--txt-primary-dark)";
      document.getElementById("one").children[1].style.display = "block";
      isActivated = true;
    }
  }
}
function showAnswerTwo() {
  if (
    getComputedStyle(
      document.getElementById("two").children[1]
    ).getPropertyValue("display") == "block"
  ) {
    document
      .getElementById("two")
      .children[0].children[0].removeAttribute("style");
    document.getElementById("two").children[1].removeAttribute("style");
    document.getElementById("two").children[0].children[1].removeAttribute("style");
  } else {
    if (isActivated === true) {
      document.getElementById("two").children[0].children[0].style.fontWeight =
        "700";
      document.getElementById("two").children[0].children[0].style.color =
        "var(--txt-primary-dark)";
        document.getElementById("two").children[0].children[1].style.transform = "rotate(180deg)";

      document.getElementById("two").children[1].style.display = "block";

      //remove all attribute but activate your own
      for (const index in masterDiv) {
        masterDiv[index].children[0].children[0].removeAttribute("style");
        masterDiv[index].children[1].removeAttribute("style");
        masterDiv[index].children[0].children[1].removeAttribute("style");

        document.getElementById(
          "two"
        ).children[0].children[0].style.fontWeight = "700";
        document.getElementById("two").children[0].children[0].style.color =
          "var(--txt-primary-dark)";

        document.getElementById("two").children[1].style.display = "block";
        document.getElementById("two").children[0].children[1].style.transform = "rotate(180deg)";
      }
      isActivated = true;
    } else {
      document.getElementById("two").children[0].children[0].style.fontWeight =
        "700";
      document.getElementById("two").children[0].children[0].style.color =
        "var(--txt-primary-dark)";
        document.getElementById("two").children[0].children[1].style.transform = "rotate(180deg)";

      document.getElementById("two").children[1].style.display = "block";
      isActivated = true;
    }
  }
}
function showAnswerThree() {
  if (
    getComputedStyle(
      document.getElementById("three").children[1]
    ).getPropertyValue("display") == "block"
  ) {
    document
      .getElementById("three")
      .children[0].children[0].removeAttribute("style");
    document.getElementById("three").children[1].removeAttribute("style");
    document.getElementById("three").children[0].children[1].removeAttribute("style");
  } else {
    if (isActivated === true) {
      document.getElementById(
        "three"
      ).children[0].children[0].style.fontWeight = "700";
      document.getElementById("three").children[0].children[0].style.color =
        "var(--txt-primary-dark)";

      document.getElementById("three").children[1].style.display = "block";
      document.getElementById("three").children[0].children[1].style.transform = "rotate(180deg)";

      //remove all attribute but activate your own
      for (const index in masterDiv) {
        masterDiv[index].children[0].children[0].removeAttribute("style");
        masterDiv[index].children[1].removeAttribute("style");
        masterDiv[index].children[0].children[1].removeAttribute("style");

        document.getElementById(
          "three"
        ).children[0].children[0].style.fontWeight = "700";
        document.getElementById("three").children[0].children[0].style.color =
          "var(--txt-primary-dark)";
          document.getElementById("three").children[0].children[1].style.transform = "rotate(180deg)";

        document.getElementById("three").children[1].style.display = "block";
      }
      isActivated = true;
    } else {
      document.getElementById(
        "three"
      ).children[0].children[0].style.fontWeight = "700";
      document.getElementById("three").children[0].children[0].style.color =
        "var(--txt-primary-dark)";

      document.getElementById("three").children[1].style.display = "block";
      document.getElementById("three").children[0].children[1].style.transform = "rotate(180deg)";
      isActivated = true;
    }
  }
}
function showAnswerFour() {
  if (
    getComputedStyle(
      document.getElementById("four").children[1]
    ).getPropertyValue("display") == "block"
  ) {
    document
      .getElementById("four")
      .children[0].children[0].removeAttribute("style");
    document.getElementById("four").children[1].removeAttribute("style");
    document.getElementById("four").children[0].children[1].removeAttribute("style");
  } else {
    if (isActivated === true) {
      document.getElementById("four").children[0].children[0].style.fontWeight =
        "700";
      document.getElementById("four").children[0].children[0].style.color =
        "var(--txt-primary-dark)";
        document.getElementById("four").children[0].children[1].style.transform = "rotate(180deg)";

      document.getElementById("four").children[1].style.display = "block";

      //remove all attribute but activate your own
      for (const index in masterDiv) {
        masterDiv[index].children[0].children[0].removeAttribute("style");
        masterDiv[index].children[1].removeAttribute("style");
        masterDiv[index].children[0].children[1].removeAttribute("style");

        document.getElementById(
          "four"
        ).children[0].children[0].style.fontWeight = "700";
        document.getElementById("four").children[0].children[0].style.color =
          "var(--txt-primary-dark)";
          document.getElementById("four").children[0].children[1].style.transform = "rotate(180deg)";

        document.getElementById("four").children[1].style.display = "block";
      }
      isActivated = true;
    } else {
      document.getElementById("four").children[0].children[0].style.fontWeight =
        "700";
      document.getElementById("four").children[0].children[0].style.color =
        "var(--txt-primary-dark)";
        document.getElementById("four").children[0].children[1].style.transform = "rotate(180deg)";

      document.getElementById("four").children[1].style.display = "block";
      isActivated = true;
    }
  }
}
function showAnswerFive() {
  if (
    getComputedStyle(
      document.getElementById("five").children[1]
    ).getPropertyValue("display") == "block"
  ) {
    document
      .getElementById("five")
      .children[0].children[0].removeAttribute("style");
    document.getElementById("five").children[1].removeAttribute("style");
    document.getElementById("five").children[0].children[1].removeAttribute("style");
  } else {
    if (isActivated === true) {
      document.getElementById("five").children[0].children[0].style.fontWeight =
        "700";
      document.getElementById("five").children[0].children[0].style.color =
        "var(--txt-primary-dark)";
        document.getElementById("five").children[0].children[1].style.transform = "rotate(180deg)";

      document.getElementById("five").children[1].style.display = "block";

      //remove all attribute but activate your own
      for (const index in masterDiv) {
        masterDiv[index].children[0].children[0].removeAttribute("style");
        masterDiv[index].children[1].removeAttribute("style");
        masterDiv[index].children[0].children[1].removeAttribute("style");

        document.getElementById(
          "five"
        ).children[0].children[0].style.fontWeight = "700";
        document.getElementById("five").children[0].children[0].style.color =
          "var(--txt-primary-dark)";
          document.getElementById("five").children[0].children[1].style.transform = "rotate(180deg)";

        document.getElementById("five").children[1].style.display = "block";
      }
      isActivated = true;
    } else {
      document.getElementById("five").children[0].children[0].style.fontWeight =
        "700";
      document.getElementById("five").children[0].children[0].style.color =
        "var(--txt-primary-dark)";
        document.getElementById("five").children[0].children[1].style.transform = "rotate(180deg)";

      document.getElementById("five").children[1].style.display = "block";
      isActivated = true;
    }
  }
}

