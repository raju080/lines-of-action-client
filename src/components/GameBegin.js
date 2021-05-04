import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function GameBegin({newGame}) {

	const {register, handleSubmit } = useForm();
	const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
		newGame(data);
		history.push('/gameplay');
	};

  return (
		<div className='gamebegin'>
			<Card>
				<Card.Header
					style={{
						backgroundColor: 'darkseagreen',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<h4>Welcome to Lines Of Action</h4>
				</Card.Header>
				<Card.Body>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Form.Row>
							<Col>
								<Form.Group>
									<Form.Label htmlFor='p1name'>Your Name</Form.Label>
									<Form.Control type='text' name='p1name' ref={register} />
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>Opponent Name</Form.Label>
									<Form.Control type='text' name='p2name' ref={register} />
								</Form.Group>
							</Col>
						</Form.Row>
						<Form.Row>
							<Col>
								<Form.Group>
									<Form.Label>Game Type</Form.Label>
									<Form.Control
										as='select'
										defaultValue='1'
										name='gamemode'
										ref={register}
									>
										<option value={1}>Human vs Human</option>
										<option value={2}>Human vs Bot</option>
									</Form.Control>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>Board Size</Form.Label>
									<Form.Row>
										<Form.Check
											type='radio'
											label='6x6'
											value='6'
											name='boardsize'
											style={{marginRight: '20px'}}
											ref={register}
										/>
										<Form.Check
											type='radio'
											label='8x8'
											value='8'
											name='boardsize'
											ref={register}
										/>
									</Form.Row>
								</Form.Group>
							</Col>
						</Form.Row>
						<Form.Group>
							<Button type='submit'>Start Game</Button>
						</Form.Group>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
}

export default GameBegin;
