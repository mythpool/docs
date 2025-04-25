# 🎰 Lottery Result Calculation

We use **Switchboard**'s random number generation technology to ensure the fairness and randomness of the lottery results. So, how does Switchboard ensure the security of the random numbers?

Switchboard addresses the random number security issue through the following technical combinations:

- **Trusted Execution Environment (TEE)**: TEE is a super-secure black box that allows code to run within it without being viewed or tampered with by anyone.
  
- **On-demand Oracle**: Switchboard uses its oracle network to fetch and process information. The key here is that all operations happen inside these secure TEE black boxes, ensuring that the generated random numbers are reliable and tamper-proof.

You can learn more about [Switchboard's verifiable randomness approach](https://docs.switchboard.xyz/product-documentation/randomness/switchboards-approach-to-verifiable-randomness).

For more in-depth information about how Switchboard works, we recommend reading the [SwitchBoard Documentation](https://docs.switchboard.xyz/).


## 🛠️ Calculation Process

During the lottery draw, the system uses the random number generator provided by Switchboard to generate fair random numbers. The process is as follows:

![winner](/winner.png)

### 1. Lottery Draw Request

When the lottery draw request is sent, the system asks Switchboard to create a **random account** to receive the random number.

### 2. Commitment Slot

The commitment slot is a critical parameter that represents the slot at the time of the lottery draw request. After receiving the request, Switchboard calculates a random number within that slot and writes it to the random account.

### 3. Generating the Random Number

The random account stores a large 256-bit number. The system calculates the final lucky number by taking the modulus of the number with the total number of tickets sold in the pool.


## 📝 Example Code

Here is the Rust code for the lottery draw, demonstrating how to fetch the random number from the random account and calculate the lucky number:

```rust
pub fn reveal_draw(randomness_data: &RandomnessAccountData, max_random: u64) -> Result<u64> {
    let clock = Clock::get()?;

    // Ensure randomness is available
    if randomness_data.seed_slot == 0 {
        return Err(error!(RandomnessError::RandomnessNotAvailable));
    }

    // Fetch the randomness value
    let value = randomness_data.get_value(&clock)
        .map_err(|_| error!(RandomnessError::RandomnessNotAvailable))?;
    
    let value_bytes = value.as_ref();
    let value_u64 = u64::from_le_bytes(value_bytes[0..8].try_into().unwrap());

    // Calculate the lucky number using modulus with total tickets sold
    Ok(value_u64 % max_random)
}
```

You can refer to the full lottery code in our GitHub open-source repository: [MythPool LAB](https://www.github.com/mythpool/contract).


## 🔑 IDL Open Source & Verification

Basic users can track the random account's random numbers and transaction details using **IDL** or **Web3JS** to verify the lottery results.

- You can use [MythPool IDL](https://github.com/mythpool/IDL) to integrate and verify the random number generation process.

This IDL provides a convenient interface for developers to fetch on-chain random numbers, track the transactions and details of the random account, and further ensure the transparency and fairness of the lottery process.


## 🔑 Summary

Through the methods described above, we ensure that the random numbers generated during each lottery draw are fair and tamper-proof. Leveraging Switchboard and Trusted Execution Environment (TEE), we provide a transparent and secure lottery process, ensuring that every participant has a fair chance.

If you have any questions or suggestions about this process, feel free to refer to the documentation or join our community for more support!