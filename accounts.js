// Function to handle profile image upload and preview
const profilePhotoInput = document.getElementById('profile-photo');
const profilePhotoPreview = document.getElementById('profile-photo-preview');
const img2 = document.getElementById('img1');
const profile_name = document.getElementById('profile_name');
const displayName = document.getElementById('display-name');

profilePhotoInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePhotoPreview.src = e.target.result;
            profilePhotoPreview.style.display = 'block';
            img2.src = e.target.result;
        }
        reader.readAsDataURL(file);
    } else {
        profilePhotoPreview.src = '';
        profilePhotoPreview.style.display = 'none';
        img2.src = 'images/default.jpg';
    }
});

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const logoutBtn = document.getElementById('logout-btn');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const closeInfoBtn = document.getElementById('close-info-btn');
    const infoForm = document.getElementById('info-form');
    const userInfoForm = document.getElementById('user-info-form');

    // Function to show User Information Form
    function showUserInfoForm() {
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) {
            alert("No user is currently logged in.");
            return;
        }
        // Populate form if data exists
        const userDataString = localStorage.getItem(`user_${currentUser}`);
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            if (userData.profile) {
                document.getElementById('full-name').value = userData.profile.fullName || '';
                document.getElementById('address').value = userData.profile.address || '';
                document.getElementById('gender').value = userData.profile.gender || '';
                document.getElementById('email').value = userData.profile.email || '';
                document.getElementById('phone').value = userData.profile.phone || '';
                document.getElementById('dob').value = userData.profile.dob || '';
                if (userData.profile.profilePhoto) {
                    profilePhotoPreview.src = userData.profile.profilePhoto;
                    profilePhotoPreview.style.display = 'block';
                    img2.src = userData.profile.profilePhoto;
                } else {
                    profilePhotoPreview.style.display = 'none';
                    img2.src = 'images/default.jpg';
                }
            }
        }
        userInfoForm.style.display = 'block';
    }

    // Function to close User Information Form
    function closeUserInfoForm() {
        userInfoForm.style.display = 'none';
        // Reset form and preview
        infoForm.reset();
        profilePhotoPreview.src = '';
        profilePhotoPreview.style.display = 'none';
        img2.src = 'images/default.jpg';
    }

    // Function to save User Information
    function saveUserInfo(event) {
        event.preventDefault(); // Prevent form submission

        const fullName = document.getElementById('full-name').value.trim();
        const address = document.getElementById('address').value.trim();
        const gender = document.getElementById('gender').value;
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const dob = document.getElementById('dob').value;
        const profilePhoto = profilePhotoPreview.src || null;

        if (fullName === '' || address === '' || gender === '' || email === '' || phone === '' || dob === '') {
            alert("Please fill in all required fields.");
            return;
        }

        // Simple phone number validation (10 digits)
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) {
            alert("No user is currently logged in.");
            return;
        }

        const userDataString = localStorage.getItem(`user_${currentUser}`);
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            userData.profile = {
                fullName: fullName,
                address: address,
                gender: gender,
                email: email,
                phone: phone,
                dob: dob,
                profilePhoto: profilePhoto
            };
            localStorage.setItem(`user_${currentUser}`, JSON.stringify(userData));
            alert("User information saved successfully.");
            userInfoForm.style.display = 'none';
            // Update display name
            displayName.textContent = fullName;
        } else {
            alert("User data not found.");
        }
    }

    // Function to handle logout
    function handleLogout() {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            // Optionally, remove user-specific data
            // localStorage.removeItem(`user_${currentUser}`);
        }
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        alert("You have been logged out.");
        // Redirect to login page
        window.location.href = 'mainbody.html';
    }

    // Function to check login state
    function checkLogin() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const currentUser = localStorage.getItem('currentUser');
        if (isLoggedIn === 'true' && currentUser) {
            // User is logged in
            // Optionally, fetch and display user data
            const userDataString = localStorage.getItem(`user_${currentUser}`);
            if (userDataString) {
                const userData = JSON.parse(userDataString);
                if (userData.profile) {
                    document.getElementById('full-name').value = userData.profile.fullName || '';
                    document.getElementById('address').value = userData.profile.address || '';
                    document.getElementById('gender').value = userData.profile.gender || '';
                    document.getElementById('email').value = userData.profile.email || '';
                    document.getElementById('phone').value = userData.profile.phone || '';
                    document.getElementById('dob').value = userData.profile.dob || '';
                    if (userData.profile.profilePhoto) {
                        profilePhotoPreview.src = userData.profile.profilePhoto;
                        profilePhotoPreview.style.display = 'block';
                        img2.src = userData.profile.profilePhoto;
                        displayName.textContent = userData.profile.fullName || 'User';
                        // Display name in the h2 tag with id profile_name
                        profile_name.textContent = userData.profile.fullName || 'User';
                    }
                } else {
                    displayName.textContent = currentUser;
                    profile_name.textContent = currentUser; // Display current user in h2 if no profile data
                }
            }
        } else {
            // User is not logged in, redirect to login page
            window.location.href = 'mainbody.html';
        }
    }


    // Event Listeners
    logoutBtn.addEventListener('click', handleLogout);
    editProfileBtn.addEventListener('click', showUserInfoForm);
    closeInfoBtn.addEventListener('click', closeUserInfoForm);
    infoForm.addEventListener('submit', saveUserInfo);
    profilePhotoInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePhotoPreview.src = e.target.result;
                profilePhotoPreview.style.display = 'block';
                img2.src = e.target.result;
            }
            reader.readAsDataURL(file);
        } else {
            profilePhotoPreview.src = '';
            profilePhotoPreview.style.display = 'none';
            img2.src = 'images/default.jpg';
        }
    });

    // Initialize the dashboard
    checkLogin();
});