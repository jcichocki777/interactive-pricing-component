const mySlider = document.querySelector(".slider");
const sliderVal = document.querySelector(".slider-value span");
const toggleBtn = document.querySelector(".toggle-btn");

function slider() {}

function calcYearlyBilling() {
  const yearlyBillingValue = Number((mySlider.value * 0.75 * 12).toFixed(2));
  if (toggleBtn.checked) {
    sliderVal.textContent = `$${yearlyBillingValue}`;
  } else {
    sliderVal.textContent = `$${mySlider.value}`;
  }
}

mySlider.addEventListener("input", () => {
  valPercent = (mySlider.value / mySlider.max) * 100;
  mySlider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${valPercent}%, hsl(224, 65%, 95%) ${valPercent}%)`;
  calcYearlyBilling();
});

toggleBtn.addEventListener("change", () => calcYearlyBilling());
