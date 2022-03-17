<template>
    <!-- Contact Form -->
    <section id="contact" class="py-5">
        <div class="container">
            <div class="row">
                <div class="contact-img col-12 col-md-5 d-flex align-items-center justify-content-end">
                    <img src="~/assets/images/9.webp" class="rounded shadow-sm" alt="">
                </div>
                <div class="contact-form col-12 col-md-7 bg-white shadow-sm rounded-3 py-5 pe-4">
                    <h2 class=" display-5">Contact Us</h2>
                    <form action="https://formsubmit.co/dc280071251434599560263cfce6bf51" method="POST">
                    <input type="hidden" name="_next" value="https://www.burooj.pro/thanks">
                    <input type="hidden" name="_subject" value="Burooj Contact Form!">
                    <input type="text" name="_honey" style="display:none">
                   
                        <!-- Name -->
                        <div class="form-floating mb-1">
                            <input type="text" class="form-control" id="name" name="name" placeholder="Mohammed Faihan" required>
                            <label for="name">Name</label>
                        </div>
                        
                        <!-- Email -->
                        <div class="form-floating mb-1">
                            <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" required>
                            <label for="email">Email address</label>
                        </div>
                        
                        <!-- Company Name -->
                        <div class="form-floating mb-1">
                            <input type="text" class="form-control" id="company" name="company" placeholder="Promotion Efficiency">
                            <label for="company">Company</label>
                        </div>

                        <!-- City -->
                        <div class="form-floating mb-1">
                            <input type="text" class="form-control" id="city" name="city" placeholder="Khobar">
                            <label for="city">City</label>
                        </div>

                        <!-- Phone Number -->
                        <div class="form-floating mb-1">
                            <input type="tel" class="form-control" id="phone" name="phone" placeholder="+966-5455-55555">
                            <label for="phone">Phone Number</label>
                        </div>

                        <!-- Message -->
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="message" name="message" style="height: 100px"></textarea>
                            <label for="message">Your message</label>
                          </div>

                        <!-- button -->
                        <div class="mt-2">
                            <div class="d-grid d-md-block gap-2">
                            <button class="btn btn-dark btn-lg" type="submit">Submit</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    </section>  
</template>

<script>
export default {

}
</script>

<style>

</style>