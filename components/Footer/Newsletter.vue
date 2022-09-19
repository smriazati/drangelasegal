<template>
  <div class="newsletter-form">
    <h2>Unlock your highest self</h2>
    <!-- <form>
      <div class="flex-row no-collapse">
        <input type="text" placeholder="Your email address" id="email" />
        <label for="email" class="visually-hidden"></label>
        <input type="submit" class="btn-underline" />
      </div>
    </form> -->
    <!-- AWeber Web Form Generator 3.0.1 -->
    <form
      method="post"
      class="af-form-wrapper"
      accept-charset="UTF-8"
      action="https://www.aweber.com/scripts/addlead.pl"
      target="_blank"
    >
      <div style="display: none">
        <input type="hidden" name="meta_web_form_id" value="1153826993" />
        <input type="hidden" name="meta_split_id" value="" />
        <input type="hidden" name="listname" value="awlist6267802" />
        <input
          type="hidden"
          name="redirect"
          value="https://www.aweber.com/thankyou-coi.htm?m=text"
          id="redirect_fcf40a46a61332f611a4d116cfc5382c"
        />

        <input
          type="hidden"
          name="meta_adtracking"
          value="Website_Embedded_Form_2022"
        />
        <input type="hidden" name="meta_message" value="1" />
        <input type="hidden" name="meta_required" value="email" />

        <input type="hidden" name="meta_tooltip" value="" />
      </div>
      <div id="af-form-1153826993" class="af-form">
        <div
          id="af-body-1153826993"
          class="af-body af-standards flex-row no-collapse"
        >
          <div class="af-element">
            <label
              class="previewLabel visually-hidden"
              for="awf_field-114733743"
              >Email:
            </label>
            <div class="af-textWrap">
              <input
                class="text"
                id="awf_field-114733743"
                type="text"
                name="email"
                value=""
                tabindex="500"
                placeholder="Your Email"
                onfocus=" if (this.value == '') { this.value = ''; }"
                onblur="if (this.value == '') { this.value='';} "
              />
            </div>
            <div class="af-clear"></div>
          </div>
          <div class="af-element buttonContainer">
            <input
              name="submit"
              class="submit"
              type="submit"
              value="Submit"
              tabindex="501"
            />
            <div class="af-clear"></div>
          </div>
        </div>
        <!-- <div id="af-footer-1153826993" class="af-footer">
          <div class="bodyText"><p>&nbsp;</p></div>
        </div> -->
      </div>
      <div style="display: none">
        <img
          src="https://forms.aweber.com/form/displays.htm?id=jIyszBxMbJyczA=="
          alt=""
        />
      </div>
    </form>

    <!-- /AWeber Web Form Generator 3.0.1 -->
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.newsletter-form {
  margin-top: 36px;
  h2 {
    @include newsletterTitle();
    margin-top: 22px;
    @media (max-width: $collapse-bp) {
      text-align: left;
      max-width: 50%;
    }
  }
  form {
    @media (min-width: $collapse-bp) {
      width: 100%;
      max-width: 360px;
    }
    margin: 24px auto 0 auto;

    .af-element:not(:last-child) {
      flex: 2;
    }
    input {
      flex: 2;
    }

    af-element.buttonContainer,
    .af-textWrap {
      display: flex;
    }
    input[type="submit"] {
      flex: 0;
      text-align: right;
    }
  }
}
</style>