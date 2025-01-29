<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ManagerRegistered extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $email, $passwd)
    {
        $this->name = $name;
        $this->email = $email;
        $this->passwd = $passwd;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->from('onlinesoftcampus@gmail.com')
            ->to($this->email)
            ->subject('Welcome To Softcampus')
            ->markdown('mails.manager-registered', ['name' => $this->name, 'email' => $this->email, 'password' => $this->passwd]);
    }
}
