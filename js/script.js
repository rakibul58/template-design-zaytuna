// Navbar scroll effect
      window.addEventListener("scroll", function () {
        const navbar = document.getElementById("navbar");
        const scrolled = window.pageYOffset;

        if (scrolled > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Add some interactive hover effects
      document.querySelectorAll(".btn").forEach((btn) => {
        btn.addEventListener("mouseenter", function () {
          this.style.transform = "translateY(-2px) scale(1.05)";
        });

        btn.addEventListener("mouseleave", function () {
          this.style.transform = "translateY(0) scale(1)";
        });
      });