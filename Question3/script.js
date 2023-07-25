function calculateAge() {
    const name = document.getElementById('name').value;
    const dob = new Date(document.getElementById('dob').value);
    const now = new Date();

    
    const ageInMilliseconds = now - dob;
    const ageInDate = new Date(ageInMilliseconds);
    const ageYears = ageInDate.getUTCFullYear() - 1970;
    const ageMonths = ageInDate.getUTCMonth();
    const ageDays = ageInDate.getUTCDate() - 1;

    
    const ageResult = document.getElementById('ageResult');
    ageResult.innerHTML = `${name}'s Age: ${ageYears} years, ${ageMonths} months, ${ageDays} days`;
}
