import './style.css'

const WelcomePage = () => {
    return (
        <div>
            <div className={'texts'}>
                <text className={'welcome'}>
                    Welcome to Los Santos Gang Blog   
                </text>

                <div className={'auth'}>
                    <div>
                        Sing up
                    </div>

                    <div>
                        Already have an account? Sing in 
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WelcomePage  