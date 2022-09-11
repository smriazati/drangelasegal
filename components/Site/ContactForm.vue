<template>
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    :action="successRoute"
    enctype="application/x-www-form-urlencoded"
    :class="hasError ? 'has-error' : 'no-error'"
  >
    <input type="hidden" name="form-name" value="contact" />

    <div class="form-group">
      <div class="flex-col">
        <label for="name">Name *</label>
        <input
          type="text"
          name="name"
          placeholder="Your chosen name"
          v-model="nameInput"
          :class="isNameValid ? 'is-valid' : 'is-not-valid'"
        />
      </div>
      <div class="flex-col">
        <label for="email">Email Address *</label>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          :class="isEmailValid ? 'is-valid' : 'is-not-valid'"
          v-model="emailInput"
        />
      </div>
    </div>

    <div class="form-group">
      <div class="flex-col">
        <label for="pronouns">Pronouns</label>
        <input type="text" name="pronouns" placeholder="Your pronouns" />
      </div>
      <div class="flex-col">
        <label for="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Best number to reach you"
        />
      </div>
    </div>

    <div class="form-group">
      <label for="companyName">Company Name (if applicable)</label>
      <input type="text" name="companyName" placeholder="YYour company name" />
      <label for="companySite">Company Website (if applicable)r</label>
      <input type="text" name="companySite" placeholder="Website URL" />
    </div>

    <div class="form-group">
      <fieldset>
        <legend>Inquiry Reason:</legend>
        <input type="radio" name="reason" value="current" /><label for="current"
          >Current Client</label
        >
        <input type="radio" name="reason" value="potential" /><label
          for="potential"
          >Potential Client</label
        >
        <input type="radio" name="reason" value="retreat" /><label for="retreat"
          >Retreat or Workshop</label
        >
        <input type="radio" name="reason" value="corporate" /><label
          for="corporate"
          >Corporate Healing</label
        >
        <input type="radio" name="reason" value="media" /><label for="media"
          >Media Inquiries</label
        >
      </fieldset>
    </div>

    <div class="form-group">
      <fieldset>
        <legend>Experience with Energy Healing:</legend>
        <input type="radio" name="reason" value="none" />
        <label for="none">None</label>
        <input type="radio" name="reason" value="some" />
        <label for="some">Some</label>
        <input type="radio" name="reason" value="extensive" />
        <label for="extensive">Extensive</label>
      </fieldset>
    </div>
    <div class="form-group">
      <label for="message">Message *</label>
      <textarea
        name="message"
        id="message"
        v-model="messageInput"
        :class="isMessageValid ? 'is-valid' : 'is-not-valid'"
      />
    </div>

    <div class="form-group" @click="onSubmitClick">
      <button :disabled="!isFormValid" class="button" type="submit">
        <span>Send</span>
      </button>
    </div>
    <div v-if="hasError" class="form-group error-group">
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
    };
  },
  computed: {
    isNameValid() {
      if (!this.name || !this.nameInput) {
        return false;
      }
      if (this.nameInput.length > 0) {
        return true;
      } else {
        return false;
      }
    },
    isEmailValid() {
      if (!this.email || !this.emailInput) {
        return false;
      }
      if (this.validateEmail(this.emailInput)) {
        return true;
      } else {
        return false;
      }
    },
    isMessageValid() {
      if (!this.message || !this.messageInput) {
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
}
</style>