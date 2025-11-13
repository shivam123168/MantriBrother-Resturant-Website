 // Wait for the DOM to load
 document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const overlay = document.getElementById('overlay');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const mainContent = document.getElementById('main-content');
    const userInfoForm = document.getElementById('user-info-form');

    const showSignupBtn = document.getElementById('show-signup');
    const showLoginBtn = document.getElementById('show-login');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const closeInfoBtn = document.getElementById('close-info-btn');

    const infoForm = document.getElementById('info-form');
    const profilePhotoInput = document.getElementById('profile-photo');
    const profilePhotoPreview = document.getElementById('profile-photo-preview');

    // Function to show Sign-up form
    function showSignUp() {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }

    // Function to show Login form
    function showLogin() {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    }

    // Sign-up logic - Save data to localStorage
    function signUp() {
        const username = document.getElementById('signup-username').value.trim();
        const password = document.getElementById('signup-password').value;

        if (username === '' || password === '') {
            alert("Please fill in all fields.");
            return;
        }

        if (localStorage.getItem(`user_${username}`)) {
            alert("Username already exists. Please choose a different one.");
            return;
        }

        // Store user data as JSON string
        const userData = {
            username: username,
            password: password, // Note: Insecure! Do not store plain passwords in production
            profile: null // Placeholder for profile data
        };
        localStorage.setItem(`user_${username}`, JSON.stringify(userData));
        alert("Sign-up successful! You can now log in.");
        showLogin(); // Switch to login form
    }

    // Login logic - Check data from localStorage
    function login() {
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value;

        if (username === '' || password === '') {
            alert("Please fill in all fields.");
            return;
        }

        const userDataString = localStorage.getItem(`user_${username}`);
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            if (userData.password === password) {
                alert("Login successful!");
                // Set login state in localStorage
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', username);
                // Update UI
                overlay.style.display = 'none';
                mainContent.style.display = 'block';
            } else {
                alert("Invalid password.");
            }
        } else {
            alert("User does not exist.");
        }
    }

    // Logout function
    function logout() {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            // Remove user data (profile)
            localStorage.removeItem(`user_${currentUser}`);
        }
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        alert("You have been logged out.");
        // Update UI
        overlay.style.display = 'flex';
        mainContent.style.display = 'none';
        userInfoForm.style.display = 'none';
    }

    // Check login state on page load
    function checkLogin() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const currentUser = localStorage.getItem('currentUser');
        if (isLoggedIn === 'true' && currentUser) {
            // User is logged in
            overlay.style.display = 'none';
            mainContent.style.display = 'block';
        } else {
            // User is not logged in
            overlay.style.display = 'flex';
            mainContent.style.display = 'none';
        }
    }

    // Show User Information Form
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
                } else {
                    profilePhotoPreview.style.display = 'none';
                }
            }
        }
        userInfoForm.style.display = 'block';
    }

    // Close User Information Form
    function closeUserInfoForm() {
        userInfoForm.style.display = 'none';
        // Reset form and preview
        infoForm.reset();
        profilePhotoPreview.src = '';
        profilePhotoPreview.style.display = 'none';
    }

    // Handle Profile Photo Preview
    function handleProfilePhoto(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePhotoPreview.src = e.target.result;
                profilePhotoPreview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        } else {
            profilePhotoPreview.src = '';
            profilePhotoPreview.style.display = 'none';
        }
    }

    // Save User Information
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
        } else {
            alert("User data not found.");
        }
    }

    // Event Listeners
    showSignupBtn.addEventListener('click', showSignUp);
    showLoginBtn.addEventListener('click', showLogin);
    signupBtn.addEventListener('click', signUp);
    loginBtn.addEventListener('click', login);
    logoutBtn.addEventListener('click', logout);
    editProfileBtn.addEventListener('click', showUserInfoForm);
    closeInfoBtn.addEventListener('click', closeUserInfoForm);
    profilePhotoInput.addEventListener('change', handleProfilePhoto);
    infoForm.addEventListener('submit', saveUserInfo);

    // Initialize the login state
    checkLogin();
});