import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import toast from 'react-hot-toast'


function HomePage() {
    return (
        <div>
            <button className='btn btn-secondary' onClick={() => toast.success("Success happy?")}>Click me</button>
            <SignedOut>
                <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
                <SignOutButton />
            </SignedIn>

            <UserButton />
        </div>
    )
}

export default HomePage
