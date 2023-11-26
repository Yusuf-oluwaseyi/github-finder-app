

function Footer() {
    const footerYear = new Date().getFullYear();
 
  return (
    <footer className="footer p-10 bg-[#fdffb8] text-primary-content footer-center font-bold">
        <p>Copyright &copy; {footerYear} Adejimi Oluwaseyi Levi</p>
    </footer>
  )
}

export default Footer
