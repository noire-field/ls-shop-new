import React from 'react';

function GuideAndTerms(props) {
    return (
        <div className={props.className}>
            <div className="card rounded-0 border-0 mb-3">
                <div className="card-footer card-footer-shop rounded-0">
                    <span color="red"><b>Term Of Sales:</b></span>
                    <ul>
                        <li>Due to the nature of our products (virtual items): <b><u>All sales are FINAL. There will not be any kind of refund.</u></b></li>
                        <li>Charging back will result in your account getting banned.</li>
                        <li>Cheating will result in IP and STEAMID ban and your code will be terminated.</li>
                        <li>Once purchased, please any of our staffs to get your donator rank on forum</li>
                        <li>Banning players for no reason will lead to your code being terminated and you will be removed/banned from the clan.</li>
                    </ul>
                </div>
            </div>
            <div className="card rounded-0 border-0 mb-3">
                <div className="card-footer card-footer-shop rounded-0">
                    <div className="row">
                        <div className="col-lg-6">
                            <b>How to buy with Paypal</b>
                            <ol>
                                <li>Select an item, choose <b>Pay with Paypal</b>. (No Login Required)</li>
                                <li>Follow the simple guide and complete the payment.</li>
                                <li>Go to our game servers, type <b>/redeem</b> in regular chat then press enter, then write the code you received when you completed the payment, you will then receive the item.</li>
                                <li>
                                    * Please do not share the code to anyone. If you lost the code:<br/>
                                    - If you were logging in while purchasing the item: Go to <b>My Account</b> to view your code.<br/>
                                    - If you were not logging in: Contact our admins for assistance.
                                </li>
                            </ol>
                        </div>
                        <div className="col-lg-6">
                            <b>How to buy with SMS and Credits</b>
                            <ol>
                                <li>Click on <b>Sign In</b> to login first. If you don't have an account, click on <b>Sign Up</b>.</li>
                                <li>Once you are logged in, click on <b>Buy Credits</b> (on the left sidebar).</li>
                                <li>You will be redirected to SMS Payment's page, follow the guide and make payments.</li>
                                <li>Once you bought credits, select an item and choose <b>Pay with Credits</b>, you will receive a code.</li>
                                <li>Go to our game servers, type <b>/redeem</b> in regular chat then press enter, then write the code you received when you completed the payment, you will then receive the item.</li>
                                <li>* Please do not share the code to anyone. If you lost the code, go to <b>My Account</b> to view your code.<br/>
                                </li>
                            </ol>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="card rounded-0 border-0 mb-3">
                <div className="card-footer card-footer-shop rounded-0">
                    <b>Item Activation (Code Redeeming):</b>
                    <ul>
                        <li>For One-time activation items (ex: Ammopacks): Upon activation, you will get your AP right away.</li>
                        <li>
                            For Long-time activation items (ex: 30 days of VIP, Admin), upon first activation, the code will be LOCKED to your Steam-ID and you will become VIP/Admin right away.<br/>
                            * Whenever you join the server, your Admin/VIP gets activated and shows you the time remaining for expiring.<br/>
                            * Please Note if you bought an Admin you need to read our clan's rules regarding Admins, Members, Server's, and act upon them. <br/>
                            <span className="text-danger">* VIP and ADMIN can be activated on multiple servers (ZP,ZE,ZI,...), however it will also be LOCKED to the server which it fistly got activated. (Let's say you buy an ADMIN code, and you activate it in ZP server, then you can not use it in ZE server)</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card rounded-0 border-0 mb-3">
                <div className="card-footer card-footer-shop rounded-0">
                    <font color="red"><b>Zombie Plague Admin Rules:</b></font>
                    <ol>
                        <li>Admins are <font color="red"><b>not allowed</b></font> to use transparent / invisible glow or set glow on normal players.</li>
                        <li>Admins are <font color="red"><b>not allowed</b></font> to respawn dead players when it's last human</li>
                        <li>Admins are <font color="red"><b>not allowed</b></font> to stay AFK in spectator when the server is FULL unless spectating hacker.</li>
                        <li>Admins are <font color="red"><b>not allowed</b></font> to make Mode for them self unless voted for.</li>
                        <li>Admins are <font color="red"><b>not allowed</b></font> to use amx commands on another Admin(slap/slay/kick etc.)</li>
                        <li>Admins <font color="red"><b>MUST</b></font> wait atleast 3 rounds before making another special mode.</li>
                        <li>Admins must make a vote before starting mode, changing map or making a nemesis: do not make a vote every round!</li>
                            <ul>
                                <li><b>amx_vote "mode?" "yes" "no</b></li>
                                <li><b>amx_vote "change map?" "yes" "no"</b>
                                    * If result of vote for change map is <font color="green"><b>YES</b></font>, you must use gal_startvote at <font color="red"><b>END</b></font> of round.<br/>
                                    * Otherwise people will lose ammo packs due to instant map change.</li>
                                <li><b>amx_vote "add nemesis?" "yes" "no"</b></li>
                                    * Admins must respect the other player. Before making a vote, you <b>MUST</b> ask the player if he needs help. If he says <font color="red"><b>NO</b></font>, then <font color="red"><b>NO</b></font> 2nd nemesis or 2nd boss.<br/>
                                    * If he is visibly a noob and doesnt know anything, you are free to make a 2nd nemesis <font color="red"><b><u>WHEN THE CLOCK HITS 3:00. NOT ANY EARLIER.</u></b></font><br/>
                                    * If result is <font color="green"><b>YES</b></font>, write a question, and first correct answer gets to become 2nd nemesis. Do correct questions, and watch who answers right carefully.
                            </ul>
                        <li><b>Zombies that aren't trying:</b></li>
                        <ul>
                            <li><font color="red"><b>1st warning:</b></font> Slap, if its near to the end of the round, slay. If the zombie is clearly AFK and not moving at all, KICK.</li>
                            <li><font color="red"><b>2nd warning:</b></font> Kick</li>
                            <li><font color="red"><b>3rd warning:</b></font> Ban for Not Trying/Rule Break.</li>
                        </ul>
                        <li>Admins must follow the server rules as any other player.</li>
                        <li>Admins must obey the orders of their superiors.</li>
                        <li>Admins must only punish a player if they see him break a server rule or if everyone is complaining about that specific player blocking or trucing, though use your better judgment if you are not actually seeing that happen.</li>
                        <li>Admins are allowed to ban players who use Autobhop or Scripts if they have <font color="red"><b>DEMO PROOF</b></font>. The moment when the admin applies the command <b>"forcejump"</b> must also be recorded. </li>
                        <li>Admins can make nemesis in dragon, and nightcrawler mode, but cannot make more than "2" nemesis.</li>
                        <li><b><u>10 second rule.</u></b>
                            <ul>
                                <li>If the special mode is "random" the 10 second rule doesn't apply. If an admin is making a 2nd nemesis, the 2nd nemesis "always" has to wait 10 seconds before attacking and cannot block spot entrance or exit path. </li>
                            </ul>
                        </li>
                    </ol>
                <font color="red"><b>Zombie Escape Admin Rules:</b></font>
                <ol>
                <li>Do not insult/threaten others. As an admin you should use a courteous and friendly language towards others either a player or another admin. (This can lead to a serious penalty)</li>
                <li>Do not abuse commands like amx_slap/slay/ kick.</li>
                <li>Do not ban for fun or without a clear reason. (In case this happens the Admin will be removed).</li>
                <li>Do not abuse the Admin say, that includes amx_tsay/psay, etc. only use it if necessary.</li>
                    <li>To make a map change, you must wait until there's 15 minutes left or less. (Use timeleft to check)</li>
                <ul>
                    <li>Example: amx_vote "Change map?" Yes No</li>
                </ul>
                <li>Prohibited to use the privileges of admin to obtain an advantage in the game over other players.</li>
                <li>Do not believe yourself superior by the rank obtained towards the rest of users.</li>
                <li>Before giving a ban the corresponding Admin must take a demo as proof of the fault committed by the user.</li>
                <li>Admins must make a previous vote before creating a mode on the server.</li>
                <li>Admins must wait 2 rounds for each created mode.</li>
                <li>It is Prohibited for Admins to create a mode in the first minutes of the map. (First Round).</li>
                <li>Admins are not allowed to use transparent/ invisible glow or set glow on normal players.</li>
                <li>Admins are not allowed to respawn dead players when on last survivor.</li>
                <li>Admins are not allowed to stay AFK in spectator when the server is FULL unless spectating hacker.</li>
            </ol>

                <font color="red"><b>Additional Rules:</b></font>
                <ol>
                <li>You can set glow on another admin if the other "agrees".</li>
                <li>Use ban as a last resource, first warn and use slap/slay/kick, unless its a known rule breaker/repeat offender.</li>
                <li>Must avoid using csay/tsay as a chat or to say things that are not important.</li>
                <li>If there is a ban evader and they keep on coming back after they've been banned 3 times, ban them again and report it to staff members.</li>
                <li>Please enforce English in mic only, free to type any language.</li>
                <li>If a player is using any sort of scripts, then ban for one week as a warning ban. If they come back after the week and they continued hacking, ban them permanently.</li>
                </ol>
                </div>
            </div>
        </div>
    )
}

export default React.memo(GuideAndTerms);