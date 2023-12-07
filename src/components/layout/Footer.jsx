

function Footer() {
    const footerYear = new Date().getFullYear();
 
  return (
    <footer className="footer p-10 bg-[#1e90ff] text-primary-content footer-center font-bold">
        <p>Copyright &copy; {footerYear} Yusuf Oluwaseyi</p>
    </footer>
  )
}

export default Footer
