import './index.css'

const Header = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary text-white">
        <div class="container-fluid bg-primary">
            <a class="navbar-brand" href="/">Logo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Link</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <button class="btn btn-light" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
)
export default Header