#pragma strict

function Start () {

}

function Update () {
	if(Input.GetKey(KeyCode.W))
		transform.Translate(Vector3.right * Time.deltaTime*(15), Space.Self);
	if(Input.GetKey(KeyCode.S))
		transform.Translate(Vector3.right * Time.deltaTime*(-15), Space.Self);
	if(Input.GetKey(KeyCode.A))
		transform.Rotate(Vector3.up * Time.deltaTime*(-100),Space.Self);
	if(Input.GetKey(KeyCode.D))
		transform.Rotate(Vector3.up * Time.deltaTime*(100),Space.Self);
}