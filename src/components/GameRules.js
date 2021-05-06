import React from 'react';

function GameRules() {
	return (
		<div>
			<h2>
				<span class='mw-headline' id='Rules'>
					Rules
				</span>
			</h2>
			<hr />
			<h3>
				<span class='mw-headline' id='Goal'>
					Goal
				</span>
			</h3>
			<p>
				The object of the game is to bring all of one's checkers together into a
				contiguous body so that they are connected vertically, horizontally or
				diagonally.
			</p>
      <hr />
			<h3>
				<span class='mw-headline' id='Movement_summary'>
					Movement summary
				</span>
			</h3>
			<ul>
				<li>Players alternate moves, with Black having the first move.</li>
				<li>Checkers move horizontally, vertically, or diagonally.</li>
				<li>
					A checker moves exactly as many spaces as there are checkers (both
					friendly and enemy) on the line in which it is moving. For example,
					Black may open with c8-c6. Black's checker moves two
				</li>
			</ul>
      <hr />
			<h3>
				<span class='mw-headline' id='Movement_diagrams'>
					Movement diagrams
				</span>
			</h3>
			<p>
				A checker may not jump over an enemy checker. Thus in the diagram below,
				White cannot play a6-d6, even though there are three checkers in row 6.
				White might instead play a6-c4, moving two spaces because there are two
				checkers in the diagonal (a6-f1) in which White is moving.
			</p>
			<p>
				<img
					alt='Lines of Action move 01.svg'
					src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Lines_of_Action_move_01.svg'
					decoding='async'
					width='205'
					height='205'
					srcset='//upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Lines_of_Action_move_01.svg/308px-Lines_of_Action_move_01.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Lines_of_Action_move_01.svg/410px-Lines_of_Action_move_01.svg.png 2x'
					data-file-width='638'
					data-file-height='638'
				/>
			</p>
			<p>
				A checker may jump over friendly checkers. Thus Black may continue with
				e8-b5, jumping his own checker. He moves three spaces because there are
				three checkers in the diagonal (a4-e8) in which he is moving.
			</p>
			<p>
				<img
					alt='Lines of Action move 02.svg'
					src='https://upload.wikimedia.org/wikipedia/commons/b/be/Lines_of_Action_move_02.svg'
					decoding='async'
					width='205'
					height='205'
					srcset='//upload.wikimedia.org/wikipedia/commons/thumb/b/be/Lines_of_Action_move_02.svg/308px-Lines_of_Action_move_02.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/b/be/Lines_of_Action_move_02.svg/410px-Lines_of_Action_move_02.svg.png 2x'
					data-file-width='638'
					data-file-height='638'
				/>
			</p>
			<p>
				A checker may land on a square occupied by an enemy checker, resulting
				in the latter's capture and removal from the game. For example, White
				may play h3-f1, capturing the black checker on f1.
			</p>
			<p>
				<img
					alt='Lines of Action move 03.svg'
					src='https://upload.wikimedia.org/wikipedia/commons/4/42/Lines_of_Action_move_03.svg'
					decoding='async'
					width='205'
					height='205'
					srcset='//upload.wikimedia.org/wikipedia/commons/thumb/4/42/Lines_of_Action_move_03.svg/308px-Lines_of_Action_move_03.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/42/Lines_of_Action_move_03.svg/410px-Lines_of_Action_move_03.svg.png 2x'
					data-file-width='638'
					data-file-height='638'
				/>
			</p>
			<p>
				A player who is reduced to a single checker wins the game, because his
				pieces are by definition united. If a move results, due to a capture, in
				each player having all his pieces in a contiguous body, then either the
				player moving wins, or the game is a draw, depending on the rules in
				force at the particular tournament.
			</p>
      <hr />
			<h3>
				<span class='mw-headline' id='Example_game'>
					Example game
				</span>
			</h3>
			<p>
				The above moves illustrated the rules, but not necessarily good play.
				The following moves are more typical of expert play.
			</p>
			<p>
				<img
					alt='Lines of Action sample 01.svg'
					src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Lines_of_Action_sample_01.svg'
					decoding='async'
					width='163'
					height='163'
					srcset='//upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lines_of_Action_sample_01.svg/245px-Lines_of_Action_sample_01.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lines_of_Action_sample_01.svg/326px-Lines_of_Action_sample_01.svg.png 2x'
					data-file-width='638'
					data-file-height='638'
				/>
			</p>
			<p>
				Black plays b1-b3. The checker moves two squares vertically, because
				there are two checkers in the file: b1 and b8. This move gives White no
				opportunity to capture, and threatens to hem in the pieces on the
				a-file.
			</p>
			<p>
				<img
					alt='Lines of Action sample 02.svg'
					src='https://upload.wikimedia.org/wikipedia/commons/4/49/Lines_of_Action_sample_02.svg'
					decoding='async'
					width='163'
					height='163'
					srcset='//upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lines_of_Action_sample_02.svg/245px-Lines_of_Action_sample_02.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lines_of_Action_sample_02.svg/326px-Lines_of_Action_sample_02.svg.png 2x'
					data-file-width='638'
					data-file-height='638'
				/>
			</p>
			<p>
				White moves h4-f2. The checker moves two spaces because there are two
				checkers in the diagonal: h4 and e1. White threatens the mobility of
				Black's checkers in the bottom row.
			</p>
			<p>
				<img
					alt='Lines of Action sample 03.svg'
					src='https://upload.wikimedia.org/wikipedia/commons/2/27/Lines_of_Action_sample_03.svg'
					decoding='async'
					width='163'
					height='163'
					srcset='//upload.wikimedia.org/wikipedia/commons/thumb/2/27/Lines_of_Action_sample_03.svg/245px-Lines_of_Action_sample_03.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/2/27/Lines_of_Action_sample_03.svg/326px-Lines_of_Action_sample_03.svg.png 2x'
					data-file-width='638'
					data-file-height='638'
				/>
			</p>
			<p>
				Black plays d1:a4, jumping over his own checker (which is permitted) and
				capturing the white checker at a4. Note that Black moved three spaces,
				as there were three checkers in the diagonal: a4, b3, and d1.
			</p>
			<p>
				It isn't clear whether the capture is advantageous or not. Black does
				now have an extra checker, but the move didn't do much to block White or
				build a central mass for Black. Usually early captures on the edge are
				not especially powerful, whereas early captures in the center are
				extremely good.
			</p>
			<p>
				<img
					alt='Lines of Action sample 04.svg'
					src='https://upload.wikimedia.org/wikipedia/commons/8/8a/Lines_of_Action_sample_04.svg'
					decoding='async'
					width='163'
					height='163'
					srcset='//upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Lines_of_Action_sample_04.svg/245px-Lines_of_Action_sample_04.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Lines_of_Action_sample_04.svg/326px-Lines_of_Action_sample_04.svg.png 2x'
					data-file-width='638'
					data-file-height='638'
				/>
			</p>
			<p>
				White plays h2-e2, continuing the blockade of the first rank. The
				checker moves three squares, jumping over a friendly checker. White,
				despite the substantial disadvantage of moving second, apparently is in
				the lead now due to the reduced mobility of Black's first-row checkers.
				White will soon play a2-d2, continuing to build his own bridge and
				forcing Black's checker on e1 to move sideways if it wants to join the
				game. It hardly helps for Black to try to escape with e1-c3, because
				that allows White to capture with a5:c3.
			</p>
      <hr />
			<h3>
				<span class='mw-headline' id='Example_winning_move'>
					Example winning move
				</span>
			</h3>
			<p>
				In the diagram below, White has made a move that connects all his pieces
				while Black is still at least two moves from such a state. Thus, White
				has won the game.
			</p>
			<p>
				<img
					alt='Loa win.png'
					src='https://upload.wikimedia.org/wikipedia/commons/e/ee/Loa_win.png'
					decoding='async'
					width='163'
					height='163'
					data-file-width='163'
					data-file-height='163'
				/>
			</p>
      <hr />
		</div>
	);
}

export default GameRules;
