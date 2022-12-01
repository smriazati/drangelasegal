<template>
  <form name="contact" method="POST" data-netlify="true" :action="successRoute"
    enctype="application/x-www-form-urlencoded" netlify-honeypot="bot-field" data-netlify-recaptcha="true"
    :class="hasError ? 'has-error' : 'no-error'">
    <input type="hidden" name="form-name" value="contact" />

    <div class="form-group">
      <div class="flex-col">
        <label for="name">Name *</label>
        <input type="text" name="name" placeholder="Your chosen name" v-model="nameInput"
          :class="isNameValid ? 'is-valid' : 'is-not-valid'" />
        <div v-if="!isNameValid">
          <p class="error">Please include your name.</p>
        </div>
      </div>
      <div class="flex-col">
        <label for="email">Email Address *</label>
        <input type="text" name="email" placeholder="Your Email" :class="isEmailValid ? 'is-valid' : 'is-not-valid'"
          v-model="emailInput" />
        <div v-if="!isEmailValid">
          <p class="error">Please include your email.</p>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="visually-hidden">
        <label>Don’t fill this out if you’re human:</label>
        <input name="bot-field" />
      </div>
      <div class="flex-col">
        <label for="pronouns">Pronouns</label>
        <input type="text" name="pronouns" placeholder="Your pronouns" />
      </div>
      <div class="flex-col">
        <label for="phone">Phone Number</label>
        <input type="text" name="phone" placeholder="Best number to reach you" />
      </div>
    </div>

    <div class="form-group">
      <div class="flex-col">
        <label for="companyName">Company Name (if applicable)</label>
        <input type="text" name="companyName" placeholder="Your company name" />
      </div>
      <div class="flex-col">
        <label for="companySite">Company Website (if applicable)</label>
        <input type="text" name="companySite" placeholder="Website URL" />
      </div>
    </div>

    <div class="form-group">
      <div class="flex-col">
        <h3>Inquiry Reason</h3>
        <div class="options">
          <label class="container">Current Client
            <input type="checkbox" value="current" />
            <span class="checkmark"></span>
          </label>
          <label class="container">Potential Client
            <input type="checkbox" value="potential" />
            <span class="checkmark"></span>
          </label>
          <label class="container">Speaking Opportunity
            <input type="checkbox" value="speaking" />
            <span class="checkmark"></span>
          </label>
          <label class="container">Retreat or Workshop
            <input type="checkbox" value="retreat" />
            <span class="checkmark"></span>
          </label>
          <label class="container">Corporate Healing
            <input type="checkbox" value="corporate" />
            <span class="checkmark"></span>
          </label>
          <label class="container">Media
            <input type="checkbox" value="media" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="flex-col">
        <h3>Experience with Energy Healing:</h3>

        <label class="container">None
          <input type="radio" checked="checked" name="radio" value="none" />
          <span class="checkmark"></span>
        </label>
        <label class="container">Some
          <input type="radio" name="radio" value="some" />
          <span class="checkmark"></span>
        </label>
        <label class="container">Extensive
          <input type="radio" name="radio" value="extensive" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
    <div class="form-group">
      <div class="flex-col">
        <label for="message">Message *</label>
        <textarea name="message" id="message" v-model="messageInput"
          :class="isMessageValid ? 'is-valid' : 'is-not-valid'" />
        <div v-if="!isMessageValid">
          <p class="error">Please include a message.</p>
        </div>
      </div>
    </div>

    <div class="form-group text-center" @click="onSubmitClick">
      <div data-netlify-recaptcha="true"></div>

      <button :disabled="!isFormValid" class="btn-fill" type="submit">
        <span>Submit</span>
      </button>
    </div>
    <div v-if="hasError" class="form-group error-group flex-col text-wrapper text-center">
      <div v-if="!isNameValid">
        <p>Please include your name.</p>
      </div>
      <div v-if="!isEmailValid">
        <p>Please include a valid email containing @.</p>
      </div>
      <div v-if="!isMessageValid">
        <p>Please include a message.</p>
      </div>
    </div>
  </form>
</template>
  
<script>
export default {
  props: {
    successRoute: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      emailInput: null,
      nameInput: null,
      messageInput: null,
      hasError: false,
      clickedSubmit: false,
    };
  },
  computed: {
    isNameValid() {
      if (!this.clickedSubmit) {
        return "TBD";
      }
      if (!this.nameInput) {
        return false;
      }
      if (this.nameInput.length > 0) {
        return true;
      } else {
        return false;
      }
    },
    isEmailValid() {
      if (!this.clickedSubmit) {
        return "TBD";
      }
      if (!this.emailInput) {
        return false;
      }
      if (this.validateEmail(this.emailInput)) {
        return true;
      } else {
        return false;
      }
    },
    isMessageValid() {
      if (!this.clickedSubmit) {
        return "TBD";
      }
      if (!this.messageInput) {
        return false;
      }
      if (this.messageInput.length > 0) {
        return true;
      } else {
        return false;
      }
    },
    areFieldsValid() {
      return {
        name: this.isNameValid,
        email: this.isEmailValid,
        message: this.isMessageValid,
      };
    },
    isFormValid() {
      if (!this.areFieldsValid) {
        return null;
      }
      const values = Object.values(this.areFieldsValid);
      if (values.includes(false)) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    onSubmitClick() {
      // console.log('hi')
      this.clickedSubmit = true;
      if (!this.isFormValid) {
        this.hasError = true;
      }
    },
    validateEmail(input) {
      const validation = input.includes("@");
      if (validation) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
form {
  margin-top: 64px;

  .form-group {
    display: flex;

    @media (max-width: 500px) {
      flex-direction: column;

      >*:not(:last-child) {
        margin-bottom: 24px;
      }
    }

    .flex-col {
      flex: 1;

      &:not(:last-child) {
        padding-right: 24px;
      }

      >*:not(:last-child) {
        margin-bottom: 8px;
      }
    }

    &+.form-group {
      margin-top: 40px;
    }
  }

  label {
    @include textStyle;
  }

  input[type="radio"]+label {
    @include inputStyle;
  }

  textarea {
    border: 1px solid black;
    width: 100%;
    min-height: 160px;
  }

  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  label.container {
    @include inputStyle;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .options {
    columns: 2;

    >* {
      margin-bottom: 8px;
    }
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: transparent;
    transition: 0.3s ease all;
    border: 1px solid $golden;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input~.checkmark {
    background-color: $golden;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked~.checkmark {
    background-color: $golden;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked~.checkmark:after {
    display: block;
  }

  button[type="submit"] {
    min-width: 180px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .is-not-valid {
    border-color: #fb4911;
  }

  p.error {
    color: #fb4911;
  }
}
</style>